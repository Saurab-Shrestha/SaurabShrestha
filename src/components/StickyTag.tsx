import { motion } from 'framer-motion';
import React from 'react';

interface StickyTagProps {
  color?: string; // Tailwind color class, e.g., 'bg-yellow-200'
  rotate?: string; // Tailwind rotate class, e.g., 'rotate-2'
  className?: string;
  children: React.ReactNode;
}

const StickyTag: React.FC<StickyTagProps> = ({ color = 'bg-yellow-200', rotate = '', className = '', children }) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`inline-block px-4 py-2 shadow-lg ${color} ${rotate} rounded-md border border-black/10 text-sm font-medium ${className}`}
      style={{ position: 'relative' }}
    >
      <span className="inline-block align-middle">{children}</span>
      <span className="absolute top-1 left-1 w-2 h-2 bg-gray-300 rounded-full border border-black/10" />
    </motion.div>
  );
};

export default StickyTag; 