import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const ProfileImage = () => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
  >
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-orange-300"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-orange-400"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Profile image placeholder */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center shadow-2xl overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-orange-300 to-red-400 flex items-center justify-center">
          <div className="text-6xl md:text-8xl font-bold text-white opacity-50">SS</div>
        </div>
        {/* Replace the above div with actual image: */}
        {/* <img 
          src="/path-to-saurab-image.jpg" 
          alt="Saurab Shrestha" 
          className="w-full h-full object-cover"
        /> */}
      </div>
      
      {/* Floating mini shapes around profile */}
      <div className="absolute -top-4 -right-4">
        <motion.div
          className="w-8 h-8 bg-yellow-400 rounded-full"
          animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <div className="absolute -bottom-4 -left-4">
        <motion.div
          className="w-6 h-6 bg-green-400"
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 0.8, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
      </div>
    </motion.div>
  </motion.div>
);

const StickyTag = ({ children, color, rotate }: { children: ReactNode; color: string; rotate: string }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 0 }}
    whileTap={{ scale: 0.95 }}
    className={`${color} ${rotate} px-4 py-2 rounded-lg shadow-md font-medium text-gray-800 cursor-pointer transition-all duration-200 hover:shadow-lg`}
  >
    {children}
  </motion.div>
);

const tags = [
  { text: 'Based in Bhaktapur, NP', color: 'bg-blue-200', rotate: 'rotate-2' },
  { text: 'I think in systems', color: 'bg-yellow-200', rotate: '-rotate-2' },
  { text: 'I love playful code', color: 'bg-red-200', rotate: 'rotate-1' },
  { text: 'AI/ML Enthusiast', color: 'bg-green-200', rotate: 'rotate-3' },
  { text: 'Problem Solver', color: 'bg-purple-200', rotate: '-rotate-1' },
];

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, 100 + delay);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

const HeroSection = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      background: [
        'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.05) 100%)',
        'linear-gradient(135deg, rgba(255, 247, 237, 0.05) 0%, transparent 100%)',
        'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.05) 100%)',
        'linear-gradient(225deg, transparent 0%, rgba(255, 247, 237, 0.05) 100%)',
      ],
      transition: { duration: 12, repeat: Infinity }
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <motion.section
      className="w-full min-h-screen flex flex-col justify-center items-stretch relative"
      style={{ background: 'transparent' }}
      animate={controls}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1 space-y-8">
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900 tracking-tight"
                style={{ letterSpacing: '-0.02em' }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                Hi, I'm{' '}
                <motion.span
                  className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Saurab Shrestha
                </motion.span>
                .
              </motion.h1>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 min-h-[3rem] tracking-wide"
              style={{ letterSpacing: '0.08em' }}
            >
              <TypewriterText 
                text="Software Developer specializing in AI/ML" 
                delay={100}
              />
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-semibold text-gray-600 leading-relaxed"
            >
              I craft{' '}
              <motion.span
                className="text-orange-600 font-bold"
                whileHover={{ scale: 1.05 }}
              >
                intelligent experiences
              </motion.span>{' '}
              with care and attention to detail.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {tags.map((tag, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotate: parseInt(tag.rotate.replace(/[^\d-]/g, '')) }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8 + idx * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150
                  }}
                >
                  <StickyTag color={tag.color} rotate={tag.rotate}>
                    {tag.text}
                  </StickyTag>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/work">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 tracking-wide"
                  style={{ letterSpacing: '0.08em' }}
                >
                  View My Work
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#fef3c7",
                    borderColor: "#f59e0b"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-orange-300 text-gray-700 px-8 py-3 rounded-full font-bold text-lg hover:border-orange-400 transition-all duration-200 tracking-wide"
                  style={{ letterSpacing: '0.08em' }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <ProfileImage />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-orange-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;