import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from './types';
import SkeletonLoader from '../../components/SkeletonLoader';

const projects: Project[] = [
  {
    id: 1,
    title: "Home Decor Ecommerce Store",
    shortDescription: "A full-featured ecommerce platform for home decor items with stripe payment integration.",
    description: "A scalable ecommerce application built to provide a seamless online shopping experience for home decor products. The platform supports product browsing, cart and checkout functionality, secure payment integration, and an intuitive user interface for both customers and administrators.",
    image: "/assets/homedecor.png",
    technologies: ["HTML/CSS", "Django", "Stripe API"],
    category: "Web Development",
    githubUrl: "https://github.com/Saurab-Shrestha/Django-Ecommerce",
    liveUrl: "#",
    features: [
      "User authentication and profile management",
      "Product catalog with search and filtering",
      "Shopping cart and secure checkout",
      "Admin dashboard for inventory and order management",
      "Integrated payment gateway"
    ],
    challenges: [
      "Designing a scalable database schema to handle large product catalogs",
      "Implementing secure authentication and payment processing"
    ],
    solutions: [
      "Normalized PostgreSQL schema for efficient product and order management",
      "Integrated Stripe API with robust authentication and encryption mechanisms"
    ]
  },
    {
      id: 2,
      title: "Tomato Disease Detection",
      shortDescription: "A CNN-based classification model for identifying tomato plant diseases.",
      description: "An AI-powered application designed to assist farmers and agricultural workers by detecting diseases in tomato plants from leaf images. The system uses a Convolutional Neural Network (CNN) model trained on labeled datasets of tomato leaves to classify common diseases and provide early detection, reducing crop loss and improving yield.",
      image: "/assets/tomato.png",
      technologies: ["Flask", "HTML/CSS", "PyTorch"],
      category: "AI/ML",
      githubUrl: "https://github.com/Saurab-Shrestha/TomatoDiseaseIdentification",
      liveUrl: "#",
      features: [
        "Image upload and disease classification",
        "CNN model trained on tomato leaf datasets",
        "Web interface for real-time predictions",
        "Accuracy reports for classification results"
      ],
      challenges: [
        "Training a robust model on limited agricultural image datasets",
        "Ensuring high accuracy across multiple disease classes"
      ],
      solutions: [
        "Applied data augmentation techniques to expand training samples",
        "Fine-tuned CNN architecture in PyTorch for better performance"
      ]
    },
  {
    id: 3,
    title: "Signature Verification using Feature Extraction",
    shortDescription: "A cross-platform signature verification application using feature extraction techniques.",
    description: "A robust signature verification system that uses advanced computer vision and machine learning techniques to verify handwritten signatures. The system is designed to be resilient to variations in signature position, rotation, and scale while maintaining high accuracy in detecting forgeries.",
    image: "/assets/signature.png",
    technologies: ["Streamlit", "Python", "Machine Learning", "TensorFlow"],
    category: "AI/ML",
    githubUrl: "https://github.com/Saurab-Shrestha/signature-verification",
    liveUrl: "#",
    features: [
      "Signature verification",
      "Feature extraction techniques",
      "Real-time predictions and accuracy reports"
    ],
    challenges: [
      "Ensuring cross-platform compatibility",
      "Implementing real-time prediction and accuracy reporting"
    ],
    solutions: [
      "Used Streamlit for consistent experience",
      "Implemented Computer Vision algorithms models for accurate predictions",
      "Created a user-friendly web interface for easy access"
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