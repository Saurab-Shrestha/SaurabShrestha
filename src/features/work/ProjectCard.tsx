import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer focusable-element border border-gray-100"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {/* Project image would go here when available */}
        <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
          <motion.div 
            className="text-3xl font-bold text-orange-600 opacity-80"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {project.title.split(' ').map(word => word[0]).join('')}
          </motion.div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <motion.div
            className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Eye size={18} />
            View Details
          </motion.div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <motion.span
            className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full tracking-wide shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {project.category}
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <motion.h3 
          className="text-lg font-bold text-gray-900 mb-2 line-clamp-2"
          whileHover={{ x: 3 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed"
        >
          {project.shortDescription}
        </motion.p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <motion.span
              key={index}
              className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-md border border-orange-100"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#FFF7ED",
                color: "#EA580C",
                borderColor: "#FDBA74"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 3 && (
            <motion.span
              className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-md border border-gray-100"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#F9FAFB",
                color: "#4B5563",
                borderColor: "#D1D5DB"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              +{project.technologies.length - 3}
            </motion.span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg font-medium text-xs hover:bg-gray-800 transition-colors duration-200 focusable-element"
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "#1F2937"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Github size={14} />
            Code
          </motion.a>
          
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium text-xs hover:from-orange-600 hover:to-red-600 transition-all duration-200 focusable-element"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 4px 12px rgba(249, 115, 22, 0.25)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ExternalLink size={14} />
            Live
          </motion.a>
        </div>
      </div>

      {/* Subtle hover border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/0 group-hover:border-orange-500/20 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;