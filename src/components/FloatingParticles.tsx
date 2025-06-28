import { motion } from 'framer-motion';

const AnimatedTriangle = ({ delay = 0, size = 40, color = '#ff6b35' }) => (
  <motion.div
    className="absolute pointer-events-none"
    initial={{ opacity: 0, scale: 0, rotate: 0 }}
    animate={{ 
      opacity: [0.3, 0.7, 0.3],
      scale: [0.8, 1.2, 0.8],
      rotate: [0, 180, 360],
      x: [0, 50, -30, 0],
      y: [0, -30, 40, 0]
    }}
    transition={{ 
      duration: 8, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    style={{
      width: 0,
      height: 0,
      borderLeft: `${size/2}px solid transparent`,
      borderRight: `${size/2}px solid transparent`,
      borderBottom: `${size}px solid ${color}`,
      filter: 'blur(0.5px)'
    }}
  />
);

const AnimatedCircle = ({ delay = 0, size = 60, color = '#fbbf24' }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.2, 0.6, 0.2],
      scale: [0.5, 1.3, 0.5],
      x: [0, -40, 30, 0],
      y: [0, 50, -20, 0]
    }}
    transition={{ 
      duration: 10, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      filter: 'blur(1px)'
    }}
  />
);

const AnimatedSquare = ({ delay = 0, size = 50, color = '#10b981' }) => (
  <motion.div
    className="absolute pointer-events-none"
    initial={{ opacity: 0, rotate: 0 }}
    animate={{ 
      opacity: [0.3, 0.8, 0.3],
      rotate: [0, 90, 180, 270, 360],
      x: [0, 60, -40, 0],
      y: [0, -40, 30, 0],
      scale: [0.8, 1.1, 0.8]
    }}
    transition={{ 
      duration: 12, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: '8px',
      filter: 'blur(0.5px)'
    }}
  />
);

const AnimatedRectangle = ({ delay = 0, width = 70, height = 30, color = '#8b5cf6' }) => (
  <motion.div
    className="absolute pointer-events-none"
    initial={{ opacity: 0, rotate: 0 }}
    animate={{ 
      opacity: [0.4, 0.7, 0.4],
      rotate: [0, -45, 45, 0],
      x: [0, -50, 40, 0],
      y: [0, 35, -25, 0],
      scale: [0.9, 1.2, 0.9]
    }}
    transition={{ 
      duration: 9, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    style={{
      width,
      height,
      backgroundColor: color,
      borderRadius: '12px',
      filter: 'blur(0.8px)'
    }}
  />
);

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top area shapes */}
      <div className="absolute top-20 left-10">
        <AnimatedTriangle delay={0} size={60} color="#ff6b35" />
      </div>
      <div className="absolute top-32 right-20">
        <AnimatedCircle delay={1} size={80} color="#fbbf24" />
      </div>
      <div className="absolute top-40 left-1/4">
        <AnimatedSquare delay={2} size={45} color="#10b981" />
      </div>
      
      {/* Middle area shapes */}
      <div className="absolute top-1/2 left-16">
        <AnimatedRectangle delay={1.5} width={90} height={40} color="#8b5cf6" />
      </div>
      <div className="absolute top-1/2 right-16">
        <AnimatedTriangle delay={3} size={70} color="#ef4444" />
      </div>
      
      {/* Bottom area shapes */}
      <div className="absolute bottom-40 left-20">
        <AnimatedCircle delay={2.5} size={100} color="#06b6d4" />
      </div>
      <div className="absolute bottom-32 right-32">
        <AnimatedSquare delay={0.5} size={55} color="#f59e0b" />
      </div>
      <div className="absolute bottom-20 left-1/3">
        <AnimatedRectangle delay={4} width={60} height={80} color="#ec4899" />
      </div>
      
      {/* Additional scattered shapes */}
      <div className="absolute top-16 left-1/2">
        <AnimatedCircle delay={3.5} size={30} color="#84cc16" />
      </div>
      <div className="absolute bottom-16 right-1/4">
        <AnimatedTriangle delay={1.8} size={40} color="#6366f1" />
      </div>
      
      {/* More shapes for better coverage */}
      <div className="absolute top-1/3 right-1/4">
        <AnimatedSquare delay={2.2} size={35} color="#f97316" />
      </div>
      <div className="absolute bottom-1/3 left-1/3">
        <AnimatedCircle delay={3.8} size={45} color="#a855f7" />
      </div>
      <div className="absolute top-2/3 left-1/2">
        <AnimatedRectangle delay={1.2} width={50} height={25} color="#06b6d4" />
      </div>
    </div>
  );
};

export { FloatingParticles };