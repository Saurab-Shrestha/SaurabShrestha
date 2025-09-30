import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkeletonLoader from '../../components/SkeletonLoader';

const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "An intelligent task management system that uses machine learning to prioritize tasks and suggest optimal scheduling.",
    technologies: ["React", "Python", "TensorFlow", "FastAPI"],
    category: "AI/ML",
    githubUrl: "https://github.com/saurab/task-manager",
    liveUrl: "https://task-manager-demo.com",
    color: "from-orange-200 to-red-300"
  },
  {
    id: 2,
    title: "E-Commerce Analytics Platform",
    description: "A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization and predictive insights.",
    technologies: ["TypeScript", "Node.js", "D3.js", "MongoDB"],
    category: "Web Development",
    githubUrl: "https://github.com/saurab/ecommerce-analytics",
    liveUrl: "https://analytics-demo.com",
    color: "from-blue-200 to-purple-300"
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    description: "A cross-platform fitness application with personalized workout plans, progress tracking, and social features.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    category: "Mobile Development",
    githubUrl: "https://github.com/saurab/fitness-app",
    liveUrl: "https://fitness-app-demo.com",
    color: "from-green-200 to-teal-300"
  }
];

const FeaturedProjects = () => {
  const [loading, setLoading] = useState(true);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  if (loading) {
    return (
      <section className="w-full py-24 px-6 md:px-16 relative spacing-section">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="skeleton skeleton-text skeleton-text-lg mb-6 w-64 mx-auto"></div>
            <div className="skeleton skeleton-text w-96 mx-auto"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            <SkeletonLoader type="project" count={3} />
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <div className="skeleton skeleton-text skeleton-text-lg w-48 h-12 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-24 px-6 md:px-16 relative spacing-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight typography-h2"
            style={{ letterSpacing: '-0.02em' }}
          >
            Featured <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-semibold text-gray-600 max-w-2xl mx-auto leading-relaxed typography-lead"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A glimpse into some of my recent work showcasing innovative solutions and technical expertise.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden focusable-element"
              whileHover={{ y: -8 }}
            >
              {/* Project Header */}
              <div className={`relative h-52 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="text-4xl font-bold text-white opacity-60">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 typography-h3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-5 line-clamp-3 typography-body">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors duration-200 focusable-element"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-200 focusable-element"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                    Live
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/work">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 tracking-wide focusable-element"
              style={{ letterSpacing: '0.08em' }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 