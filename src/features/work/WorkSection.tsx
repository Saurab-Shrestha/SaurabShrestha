import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from './types';
import SkeletonLoader from '../../components/SkeletonLoader';

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    shortDescription: "An intelligent task management system that uses machine learning to prioritize tasks and suggest optimal scheduling.",
    description: "This AI-powered task manager revolutionizes personal productivity by leveraging machine learning algorithms to understand your work patterns and automatically prioritize tasks based on urgency, importance, and your historical completion rates. The system continuously learns from your behavior to provide increasingly accurate scheduling suggestions.",
    image: "/images/task-manager.jpg",
    technologies: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    category: "AI/ML",
    githubUrl: "https://github.com/saurab/task-manager",
    liveUrl: "https://task-manager-demo.com",
    features: [
      "AI-powered task prioritization",
      "Smart scheduling suggestions",
      "Progress tracking and analytics"
    ],
    challenges: [
      "Implementing accurate ML models for task prioritization",
      "Ensuring data privacy and security"
    ],
    solutions: [
      "Used TensorFlow for custom ML models",
      "Implemented end-to-end encryption"
    ]
  },
  {
    id: 2,
    title: "E-Commerce Analytics Platform",
    shortDescription: "A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization and predictive insights.",
    description: "Our e-commerce analytics platform provides businesses with actionable insights through real-time data visualization and predictive analytics. The dashboard integrates with major e-commerce platforms to track sales performance, customer behavior, and inventory levels. Advanced machine learning models predict future trends and identify opportunities for growth.",
    image: "/images/ecommerce-analytics.jpg",
    technologies: ["TypeScript", "Node.js", "D3.js", "MongoDB", "Express"],
    category: "Web Development",
    githubUrl: "https://github.com/saurab/ecommerce-analytics",
    liveUrl: "https://analytics-demo.com",
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Custom reporting"
    ],
    challenges: [
      "Handling large volumes of real-time data",
      "Creating intuitive visualizations"
    ],
    solutions: [
      "Implemented efficient data processing pipelines",
      "Used D3.js for interactive charts"
    ]
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    shortDescription: "A cross-platform fitness application with personalized workout plans, progress tracking, and social features.",
    description: "This mobile fitness application offers personalized workout plans based on user goals, fitness levels, and available equipment. The app includes progress tracking with detailed analytics, social features for community support, and integration with wearable devices. Machine learning algorithms adapt workout recommendations based on user performance and feedback.",
    image: "/images/fitness-app.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Node.js", "Express"],
    category: "Mobile Development",
    githubUrl: "https://github.com/saurab/fitness-app",
    liveUrl: "https://fitness-app-demo.com",
    features: [
      "Personalized workout plans",
      "Progress tracking",
      "Social community features"
    ],
    challenges: [
      "Ensuring cross-platform compatibility",
      "Implementing real-time social features"
    ],
    solutions: [
      "Used React Native for consistent experience",
      "Integrated Firebase for real-time updates"
    ]
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    shortDescription: "A scalable real-time chat application with end-to-end encryption and file sharing capabilities.",
    description: "Our real-time chat application provides secure communication with end-to-end encryption, group chats, file sharing, and voice messaging. Built with scalability in mind, the application can handle thousands of concurrent users. Features include message reactions, threaded conversations, and integration with popular productivity tools.",
    image: "/images/chat-app.jpg",
    technologies: ["WebSocket", "React", "Node.js", "Redis", "MongoDB"],
    category: "Web Development",
    githubUrl: "https://github.com/saurab/chat-app",
    liveUrl: "https://chat-demo.com",
    features: [
      "End-to-end encryption",
      "Group chats and file sharing",
      "Voice messaging"
    ],
    challenges: [
      "Ensuring real-time performance at scale",
      "Implementing robust security measures"
    ],
    solutions: [
      "Used WebSocket for real-time communication",
      "Implemented comprehensive encryption protocols"
    ]
  },
  {
    id: 5,
    title: "Smart Home Automation System",
    shortDescription: "An IoT-based home automation system that learns user preferences and automates daily routines.",
    description: "This smart home automation system connects various IoT devices to create a seamless living experience. The system learns user preferences and daily routines to automatically adjust lighting, temperature, and security settings. Voice control integration and mobile app access make home management effortless.",
    image: "/images/smart-home.jpg",
    technologies: ["IoT", "Python", "Raspberry Pi", "MQTT", "React"],
    category: "IoT",
    githubUrl: "https://github.com/saurab/smart-home",
    liveUrl: "https://smart-home-demo.com",
    features: [
      "Automated lighting and climate control",
      "Security monitoring",
      "Voice control integration"
    ],
    challenges: [
      "Integrating diverse IoT devices",
      "Ensuring system reliability"
    ],
    solutions: [
      "Used MQTT for device communication",
      "Implemented redundant systems for reliability"
    ]
  },
  {
    id: 6,
    title: "Financial Portfolio Tracker",
    shortDescription: "A comprehensive financial portfolio management tool with real-time market data and risk analysis.",
    description: "Our financial portfolio tracker helps investors manage their assets with real-time market data, performance analytics, and risk assessment tools. The application provides personalized investment recommendations based on risk tolerance and financial goals. Advanced charting capabilities and automated reporting make financial planning easier.",
    image: "/images/portfolio-tracker.jpg",
    technologies: ["React", "Python", "Pandas", "Plotly", "Flask"],
    category: "Data Science",
    githubUrl: "https://github.com/saurab/portfolio-tracker",
    liveUrl: "https://portfolio-tracker-demo.com",
    features: [
      "Real-time market data",
      "Risk analysis and reporting",
      "Personalized recommendations"
    ],
    challenges: [
      "Processing complex financial data",
      "Ensuring data accuracy and compliance"
    ],
    solutions: [
      "Used Pandas for data processing",
      "Implemented data validation pipelines"
    ]
  }
];

const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="skeleton skeleton-text skeleton-text-lg mb-6 w-48 mx-auto"></div>
            <div className="skeleton skeleton-text w-96 mx-auto"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton skeleton-text skeleton-text-sm w-24 h-10 rounded-full"></div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkeletonLoader type="card" count={6} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
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
            My <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-semibold text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore my portfolio of innovative solutions and technical expertise across various domains.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors duration-200">
            All Projects
          </button>
          <button className="px-6 py-2 bg-white text-white border border-gray-200 rounded-full font-semibold text-sm hover:bg-orange-50 hover:border-orange-300 transition-colors duration-200">
            Web Development
          </button>
          <button className="px-6 py-2 bg-white text-white border border-gray-200 rounded-full font-semibold text-sm hover:bg-orange-50 hover:border-orange-300 transition-colors duration-200">
            Mobile Development
          </button>
          <button className="px-6 py-2 bg-white text-white border border-gray-200 rounded-full font-semibold text-sm hover:bg-orange-50 hover:border-orange-300 transition-colors duration-200">
            AI/ML
          </button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default WorkSection;