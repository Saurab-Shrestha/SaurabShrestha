import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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
    const base =
      "uppercase tracking-wide font-bold px-4 py-2 transition-all duration-200 relative focusable-link no-focus-underline";
  
    if (isActive) {
      return `${base} text-orange-600`;
    }
  
    return `${base} text-gray-900 hover:text-orange-600`;
  }, [isActive]);
  
  
  return (
    <motion.div
      variants={linkVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      className="hover-scale"
    >
      <Link
        to={link.to}
        onClick={handleClick}
        className={linkClasses}
        aria-current={isActive ? 'page' : undefined}
        style={{ letterSpacing: '0.08em' }}
      >
        {link.name}
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

  // Refs for focus management
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuToggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstFocusableElementRef = useRef<HTMLAnchorElement>(null);

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

  // Enhanced focus management for mobile menu
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      
      // Focus the first focusable element in the mobile menu when it opens
      setTimeout(() => {
        if (mobileMenuRef.current) {
          const focusableElements = mobileMenuRef.current.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
          ) as NodeListOf<HTMLElement>;
          
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
            firstFocusableElementRef.current = focusableElements[0] as HTMLAnchorElement;
          }
        }
      }, 100);
    } else {
      document.body.style.overflow = '';
      
      // Return focus to the menu toggle button when menu closes
      setTimeout(() => {
        if (mobileMenuToggleButtonRef.current) {
          mobileMenuToggleButtonRef.current.focus();
        }
      }, 100);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Enhanced keyboard navigation for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Close menu with Escape key
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
        return;
      }
      
      // Handle Tab key navigation within mobile menu
      if (menuOpen && mobileMenuRef.current && e.key === 'Tab') {
        const focusableElements = mobileMenuRef.current.querySelectorAll(
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
        ) as NodeListOf<HTMLElement>;
        
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          // Shift + Tab from first element goes to last
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          // Tab from last element goes to first
          firstElement.focus();
          e.preventDefault();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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
            className="hover-scale"
          >
            <Link
              to="/"
              className="text-xl md:text-2xl font-black tracking-tight text-gray-900 hover:text-orange-500 transition-all duration-300 rounded-lg group focusable-link"
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
                whileHover={{ y: -2 }}
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
            ref={mobileMenuToggleButtonRef}
            id="mobile-menu-toggle"
            className="md:hidden p-0 w-11 h-11 flex items-center justify-center rounded-none bg-transparent hover:bg-transparent border-0 shadow-none transition-transform duration-200 focus:outline-none relative z-[80] focusable-button"
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
                <X size={26} strokeWidth={2.5} className="text-orange-500" />
              ) : (
                <Menu size={26} strokeWidth={2.5} className="text-orange-500" />
              )}
            </motion.div>
          </motion.button>
        </div>
        
        {/* Enhanced Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 shadow-lg"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
        >
          <motion.div
            className="absolute top-0 right-0 w-4 h-full bg-orange-600 rounded-r-full shadow-md"
            animate={{ 
              opacity: scrollProgress > 5 ? 1 : 0,
              scale: scrollProgress > 5 ? 1 : 0.8
            }}
            transition={{ duration: 0.2 }}
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
              ref={mobileMenuRef}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-white via-gray-50 to-orange-50/30 flex flex-col transform-gpu border-b-4 border-orange-400 shadow-2xl mobile-menu-panel"
              style={{ transformOrigin: 'top center' }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              tabIndex={-1}
            >
              {/* Mobile Header */}
              <motion.div 
                className="flex items-center justify-between px-6 py-5 border-b border-gray-200/50 bg-white/50 backdrop-blur-0 mobile-menu-header"
                variants={mobileNavItemVariants}
              >
                <span className="text-2xl font-black tracking-tight text-gray-900">
                  SAURAB <span className="text-orange-500">SHRESTHA</span>
                </span>
                <motion.button
                  className="p-3 rounded-xl hover:bg-orange-50 transition-all duration-200 shadow-sm border border-gray-200/50 focusable-button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={26} strokeWidth={2.5} className="text-orange-500" />
                </motion.button>
              </motion.div>
              
              {/* Mobile Navigation Links */}
              <motion.div 
                ref={mobileMenuRef}
                className="flex-1 flex flex-col items-center justify-center gap-10 px-10 pb-10 mobile-menu-content"
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
                className="px-8 py-8 text-center text-sm text-gray-500 border-t border-gray-200/50 bg-gradient-to-r from-orange-50/50 to-transparent mobile-menu-footer"
                variants={mobileNavItemVariants}
              >
                <p className="font-medium">© 2025 Saurab Shrestha</p>
                <p className="text-xs mt-2 text-gray-400">Crafted with ❤️</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-20 md:h-24" aria-hidden="true" />
    </>
  );
};

export default NavBar;