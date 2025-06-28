import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from './types';

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "An intelligent task management system that uses machine learning to prioritize tasks and suggest optimal scheduling.",
    shortDescription: "Smart task prioritization with ML",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    category: "AI/ML",
    githubUrl: "https://github.com/saurab/task-manager",
    liveUrl: "https://task-manager-demo.com",
    features: [
      "Machine learning-based task prioritization",
      "Natural language task input",
      "Smart scheduling suggestions",
      "Real-time collaboration",
      "Progress analytics dashboard"
    ],
    challenges: [
      "Implementing real-time ML inference",
      "Optimizing database queries for large datasets",
      "Creating intuitive UI for complex ML features"
    ],
    solutions: [
      "Used Redis for caching ML predictions",
      "Implemented database indexing and query optimization",
      "Designed progressive disclosure UI patterns"
    ]
  },
  {
    id: 2,
    title: "E-Commerce Analytics Platform",
    description: "A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization and predictive insights.",
    shortDescription: "Real-time e-commerce analytics",
    image: "/api/placeholder/400/300",
    technologies: ["TypeScript", "Node.js", "D3.js", "MongoDB", "Redis"],
    category: "Web Development",
    githubUrl: "https://github.com/saurab/ecommerce-analytics",
    liveUrl: "https://analytics-demo.com",
    features: [
      "Real-time sales tracking",
      "Customer behavior analysis",
      "Predictive inventory management",
      "Custom dashboard builder",
      "Automated reporting system"
    ],
    challenges: [
      "Handling high-volume real-time data",
      "Creating responsive data visualizations",
      "Implementing complex filtering logic"
    ],
    solutions: [
      "Used WebSocket connections for real-time updates",
      "Implemented virtual scrolling for large datasets",
      "Created modular filter components"
    ]
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    description: "A cross-platform fitness application with personalized workout plans, progress tracking, and social features.",
    shortDescription: "Personalized fitness tracking",
    image: "/api/placeholder/400/300",
    technologies: ["React Native", "Firebase", "Redux", "Node.js", "MongoDB"],
    category: "Mobile Development",
    githubUrl: "https://github.com/saurab/fitness-app",
    liveUrl: "https://fitness-app-demo.com",
    features: [
      "Personalized workout plans",
      "Progress tracking and analytics",
      "Social features and challenges",
      "Nutrition tracking",
      "Wearable device integration"
    ],
    challenges: [
      "Optimizing app performance on low-end devices",
      "Implementing offline functionality",
      "Managing complex state across screens"
    ],
    solutions: [
      "Used React Native performance optimization techniques",
      "Implemented local storage with sync capabilities",
      "Created centralized state management with Redux"
    ]
  },
  {
    id: 4,
    title: "Blockchain Supply Chain",
    description: "A decentralized supply chain management system using blockchain technology for transparency and traceability.",
    shortDescription: "Transparent supply chain tracking",
    image: "/api/placeholder/400/300",
    technologies: ["Solidity", "React", "Web3.js", "IPFS", "Ethereum"],
    category: "Blockchain",
    githubUrl: "https://github.com/saurab/supply-chain",
    liveUrl: "https://supply-chain-demo.com",
    features: [
      "Product traceability from source to consumer",
      "Smart contract automation",
      "Decentralized data storage",
      "Real-time tracking updates",
      "Audit trail generation"
    ],
    challenges: [
      "Optimizing gas costs for smart contracts",
      "Ensuring data integrity across the network",
      "Creating user-friendly blockchain interactions"
    ],
    solutions: [
      "Implemented batch processing for gas optimization",
      "Used IPFS for decentralized data storage",
      "Created abstraction layers for blockchain complexity"
    ]
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A modern chat application with real-time messaging, file sharing, and video calling capabilities.",
    shortDescription: "Real-time messaging platform",
    image: "/api/placeholder/400/300",
    technologies: ["Socket.io", "React", "Node.js", "MongoDB", "WebRTC"],
    category: "Web Development",
    githubUrl: "https://github.com/saurab/chat-app",
    liveUrl: "https://chat-app-demo.com",
    features: [
      "Real-time messaging",
      "File and media sharing",
      "Video and voice calls",
      "Group chat functionality",
      "Message encryption"
    ],
    challenges: [
      "Scaling WebSocket connections",
      "Implementing reliable video calling",
      "Ensuring message delivery guarantees"
    ],
    solutions: [
      "Used Redis for WebSocket scaling",
      "Implemented WebRTC with fallback options",
      "Created message acknowledgment system"
    ]
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets with advanced filtering and export capabilities.",
    shortDescription: "Interactive data visualization",
    image: "/api/placeholder/400/300",
    technologies: ["D3.js", "React", "Python", "Pandas", "Flask"],
    category: "Data Science",
    githubUrl: "https://github.com/saurab/data-viz",
    liveUrl: "https://data-viz-demo.com",
    features: [
      "Interactive charts and graphs",
      "Advanced filtering and search",
      "Data export functionality",
      "Custom visualization builder",
      "Real-time data updates"
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Creating responsive visualizations",
      "Implementing complex filtering logic"
    ],
    solutions: [
      "Used data virtualization techniques",
      "Implemented canvas-based rendering",
      "Created modular filter components"
    ]
  }
];

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <section className="w-full min-h-screen py-16 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            My <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Work</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-semibold text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A collection of projects that showcase my passion for creating innovative solutions 
            and pushing the boundaries of technology.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full text-white/80 font-bold text-lg transition-all duration-200 tracking-wide ${
                filter === category
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'border-2 border-orange-300 text-gray-700 hover:border-orange-400 hover:bg-orange-50'
              }`}
              style={{ letterSpacing: '0.08em' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-500">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkSection; 