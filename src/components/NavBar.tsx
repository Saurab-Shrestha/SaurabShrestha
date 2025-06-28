import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { X, Menu } from 'lucide-react';

interface NavLink {
  name: string;
  to: string;
}

const navLinks: NavLink[] = [
  { name: 'Work', to: '/work' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
  { name: 'Resume', to: '/resume' },
];

interface NavLinkItemProps {
  link: NavLink;
  isMobile?: boolean;
  closeMenu?: () => void;
  isActive: boolean;
}

const NavLinkItem = React.memo(({
  link,
  isMobile = false,
  closeMenu,
  isActive,
}: NavLinkItemProps) => {
  const handleClick = useCallback(() => {
    if (isMobile && closeMenu) {
      closeMenu();
    }
  }, [isMobile, closeMenu]);

  const linkVariants: Variants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const linkClasses = useMemo(() => {
    const base = 'uppercase tracking-wide font-bold px-4 py-2 rounded-full transition-all duration-200 relative overflow-hidden';
    if (isActive) {
      return `${base} border border-orange-400 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600 shadow-sm`;
    }
    return `${base} text-gray-900 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 hover:shadow-sm`;
  }, [isActive]);

  return (
    <motion.div
      variants={linkVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
    >
      <Link
        to={link.to}
        onClick={handleClick}
        className={linkClasses}
        aria-current={isActive ? 'page' : undefined}
        style={{ letterSpacing: '0.08em' }}
      >
        {link.name}
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-full"
            layoutId="activeLink"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );
});
NavLinkItem.displayName = 'NavLinkItem';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      if (scrollY > lastScrollY && scrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(scrollY);
      
      setIsScrolled(scrollY > 20);
      setScrollProgress(maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen, closeMenu]);

  const navbarOpacity = useMemo(() => {
    if (!isScrolled) return 1;
    if (scrollDirection === 'down' && lastScrollY > 200) return 0.95;
    return 1;
  }, [isScrolled, scrollDirection, lastScrollY]);

  const navbarClasses = useMemo(() => {
    const baseClasses = 'w-full fixed top-0 z-40 transition-all duration-300';
    const scrolledClasses = isScrolled 
      ? 'backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
      : '';
    
    return `${baseClasses} ${scrolledClasses}`;
  }, [isScrolled]);

  const navbarStyle = useMemo(() => ({
    backgroundColor: `rgba(250, 248, 246, ${navbarOpacity})`,
    transform: scrollDirection === 'down' && lastScrollY > 200 ? 'translateY(-2px)' : 'translateY(0)',
  }), [navbarOpacity, scrollDirection, lastScrollY]);

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const mobileMenuVariants: Variants = {
    hidden: { 
      y: '-100vh',
      opacity: 0,
      transition: { 
        duration: 0.4, 
        ease: 'easeInOut'
      } 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.4, 
        ease: 'easeOut',
        staggerChildren: 0.1
      } 
    }
  };

  const mobileNavItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const backdropVariants: Variants = {
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  return (
    <>
      <motion.nav 
        className={navbarClasses} 
        style={navbarStyle}
        role="navigation" 
        aria-label="Main navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/"
              className="text-xl md:text-2xl font-black tracking-tight text-gray-900 hover:text-orange-500 transition-all duration-300 rounded-lg group"
              style={{ letterSpacing: '-0.02em' }}
              aria-label="Saurab Shrestha - Home"
            >
              SAURAB <span className="text-orange-500 group-hover:text-orange-600 transition-colors duration-300">SHRESTHA</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex gap-2 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <NavLinkItem
                  link={link}
                  isActive={location.pathname === link.to}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-xl bg-white/80 hover:bg-orange-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 relative z-[80] shadow-sm border border-gray-200/50"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-panel"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex items-center justify-center"
            >
              {menuOpen ? (
                <X size={24} strokeWidth={2.5} className="text-orange-500" />
              ) : (
                <Menu size={24} strokeWidth={2.5} className="text-orange-500" />
              )}
            </motion.div>
          </motion.button>
        </div>
        
        {/*  Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 shadow-sm"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
        >
          <motion.div
            className="absolute top-0 right-0 w-2 h-full bg-orange-600 rounded-r-full"
            animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
          />
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[70]"
          >
            {/* Enhanced Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-sm"
              onClick={closeMenu}
              aria-hidden="true"
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-white via-gray-50 to-orange-50/30 flex flex-col transform-gpu border-b-4 border-orange-400 shadow-2xl"
              style={{ transformOrigin: 'top center' }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Mobile Header */}
              <motion.div 
                className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50 bg-white/50 backdrop-blur-0"
                variants={mobileNavItemVariants}
              >
                <span className="text-xl font-black tracking-tight text-gray-900">
                  SAURAB <span className="text-orange-500">SHRESTHA</span>
                </span>
                <motion.button
                  className="p-2 rounded-xl hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 shadow-sm border border-gray-200/50"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} strokeWidth={2.5} className="text-orange-500" />
                </motion.button>
              </motion.div>
              
              {/* Mobile Navigation Links */}
              <motion.div 
                className="flex-1 flex flex-col items-center justify-center gap-8 px-8 pb-8"
                variants={mobileMenuVariants}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={mobileNavItemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="w-full flex justify-center"
                  >
                    <NavLinkItem
                      link={link}
                      isMobile
                      closeMenu={closeMenu}
                      isActive={location.pathname === link.to}
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Mobile Footer */}
              <motion.div 
                className="px-6 py-6 text-center text-sm text-gray-500 border-t border-gray-200/50 bg-gradient-to-r from-orange-50/50 to-transparent"
                variants={mobileNavItemVariants}
              >
                <p className="font-medium">© 2025 Saurab Shrestha</p>
                <p className="text-xs mt-1 text-gray-400">Crafted with ❤️</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
};

export default NavBar;