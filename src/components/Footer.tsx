import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Heart,
  ArrowUp
} from 'lucide-react';

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Saurab-Shrestha",
      icon: Github,
      color: "hover:bg-gray-900 hover:text-white"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saurab-shrestha-092090182/",
      icon: Linkedin,
      color: "hover:bg-blue-600 hover:text-white"
    },
  ];

  const quickLinks = [
    { name: 'Work', to: '/work' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Blog', to: '/blog' },
    { name: 'Resume', to: '/resume' }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "shresthasaurab030@gmail.com",
      link: "mailto:shresthasaurab030@gamil.com"
    },
    {
      icon: MapPin,
      text: "Bhaktapur, Nepal",
      link: null
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 to-orange-50 border-t border-gray-200 mt-24">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-200 to-red-300 flex items-center justify-center">
                <div className="text-xl font-bold text-white">SS</div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 typography-h3">Saurab Shrestha</h3>
                <p className="text-orange-600 font-semibold typography-lead">Software Developer</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md typography-body">
              Passionate software developer specializing in full-stack development and AI/ML applications. 
              Creating intelligent solutions that make a difference.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-5">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white text-gray-600 rounded-full border border-gray-200 transition-all duration-200 ${social.color} focusable-element`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon size={22} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-8 typography-h4">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-200 font-medium typography-body focusable-element"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-8 typography-h4">Get In Touch</h4>
            <div className="space-y-5">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-3 bg-orange-100 rounded-full">
                      <Icon size={18} className="text-orange-600" />
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-orange-600 transition-colors duration-200 font-medium typography-body focusable-element"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-600 font-medium typography-body">{info.text}</span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto py-8 px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600 typography-body">
              <span>© {year} Saurab Shrestha. Made with</span>
              <Heart size={18} className="text-red-500 fill-current" />
              <span>in Nepal</span>
            </div>
            
            <div className="flex items-center gap-8">
              <span className="text-gray-500 text-sm typography-body">
                Available for opportunities
              </span>
              <motion.button
                onClick={scrollToTop}
                className="p-3 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-colors duration-200 focusable-element"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Scroll to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 