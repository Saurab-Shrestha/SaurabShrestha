import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Brain, 
  Zap, 
  MapPin, 
  Coffee,
  ArrowRight,
  Heart,
  Users,
  Award
} from 'lucide-react';

const AboutPreview = () => {
  const skills = [
    { name: "Python", category: "Backend" },
    { name: "AI/ML", category: "Specialty" },
    { name: "RPA", category: "Specialty" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
  ];

  const stats = [
    { number: "5+", label: "Projects", icon: Code },
    { number: "2+", label: "Years", icon: Award },
    { number: "10+", label: "Technologies", icon: Brain },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full py-20 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            About <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-semibold text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate software developer with a love for creating intelligent solutions 
            and pushing the boundaries of technology.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Personal Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-200 to-red-300 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">SS</div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900">Saurab Shrestha</h3>
                  <p className="text-lg text-orange-600 font-semibold">Software Developer</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello! I'm a passionate software developer based in Bhaktapur, Nepal. 
                I specialize in full-stack development with a focus on AI/ML applications, 
                always striving to create solutions that are both functional and delightful.
              </p>
            </div>

            {/* Quick Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} className="text-orange-500" />
                <span>Bhaktapur, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Coffee size={18} className="text-orange-500" />
                <span>Available for opportunities</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Heart size={18} className="text-orange-500" />
                <span>Passionate about AI/ML & Full-stack Development</span>
              </div>
            </div>

            {/* Skills Preview */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Key Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    className="px-3 py-2 bg-orange-100 text-orange-700 font-semibold rounded-lg text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Stats & CTA */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-white rounded-2xl p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-center mb-3">
                      <Icon size={24} className="text-orange-500" />
                    </div>
                    <div className="text-2xl font-black text-orange-600 mb-1">{stat.number}</div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Want to know more about my journey?
              </h4>
              <p className="text-gray-600 mb-6">
                Discover my story, skills, experience, and what drives my passion for technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/about">
                  <motion.button
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 tracking-wide"
                    style={{ letterSpacing: '0.08em' }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More About Me
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    className="inline-flex items-center gap-3 px-6 py-3 border-2 border-orange-500 text-orange-600 bg-white rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-200 tracking-wide"
                    style={{ letterSpacing: '0.08em' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview; 