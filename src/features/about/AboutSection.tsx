import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Zap, 
  Users, 
  Award, 
  BookOpen, 
  Coffee,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  GraduationCap,
  Briefcase,
  Heart
} from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('story');

  const skills = {
    "Frontend Development": ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    "Backend Development": ["Python", "Django", "FastAPI", "PostgreSQL", "MongoDB"],
    "AI/ML": ["PyTorch", "Scikit-learn", "OpenAI API", "LlamaIndex", "Qdrant"],
    "DevOps & Tools": ["Docker", "Git", "CI/CD", "Linux"]
  };

  const experiences = [
    {
      year: "April 2023 - Present",
      title: "Software Engineer",
      company: "QuickFox Consulting, Bhaktapur, Nepal",
      description: "Leading initiatives on intelligent document systems and automation solutions for enterprise-grade clients.",
      achievements: [
        "Designed and implemented a robust Retrieval-Augmented Generation (RAG) system using FastAPI and LlamaIndex for real-time document QA.",
        "Engineered backend infrastructure to support scalable document ingestion and semantic search workflows.",
        "Automated cheque clearing processes through an intelligent agent-based system, reducing manual effort and operational errors.",
        "Developed a custom Nepali OCR module tailored for cheque data extraction, significantly improving accuracy in technical clearing workflows.",
      ]
    }
  ];
  

  const education = [
    {
      degree: "Bachelor's in Science Computer Science and Information Technology",
      school: "Tribhuvan University",
      year: "2018",
      description: "Focused on software development and system design"
    }
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
    <section className="w-full min-h-screen py-16 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            About <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Me</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-semibold text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate software developer with a love for creating intelligent solutions 
            and pushing the boundaries of technology.
          </motion.p>
        </motion.div>

        {/* Hero Section with Personal Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12">
              {/* Left - Personal Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-200 to-red-300 flex items-center justify-center">
                      <div className="text-3xl font-bold text-white">SS</div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-gray-900">Saurab Shrestha</h2>
                      <p className="text-xl text-orange-600 font-semibold">Software Developer</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Hello! I'm a passionate software developer based in Bhaktapur, Nepal. 
                    I specialize in full-stack development with a focus on AI/ML applications, 
                    always striving to create solutions that are both functional and delightful.
                  </p>
                </div>

                {/* Contact & Social */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={20} className="text-orange-500" />
                    <span>Bhaktapur, Nepal</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={20} className="text-orange-500" />
                    <span>shresthasaurab030@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Coffee size={20} className="text-orange-500" />
                    <span>Available for opportunities</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/saurab-shrestha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/saurab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/saurab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter size={20} />
                  </motion.a>
                </div>
              </motion.div>

              {/* Right - Stats Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-black text-orange-600 mb-2">5+</div>
                  <div className="text-gray-600 font-semibold">Projects</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-black text-orange-600 mb-2">2+</div>
                  <div className="text-gray-600 font-semibold">Years</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-black text-orange-600 mb-2">10+</div>
                  <div className="text-gray-600 font-semibold">Technologies</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { id: 'story', label: 'My Story', icon: Heart },
            { id: 'skills', label: 'Skills', icon: Code },
            { id: 'experience', label: 'Experience', icon: Briefcase },
            { id: 'education', label: 'Education', icon: GraduationCap }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 text-white/90 rounded-full font-bold text-lg transition-all duration-200 tracking-wide ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'border-2 border-orange-300 text-gray-700 hover:border-orange-400 hover:bg-orange-50'
                }`}
                style={{ letterSpacing: '0.08em' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'story' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-lg p-12">
                <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">My Journey</h3>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    My journey in technology began with a simple curiosity about how things work. 
                    As a child, I was fascinated by computers and spent countless hours exploring 
                    their capabilities. This curiosity evolved into a deep passion for creating 
                    intelligent solutions that make a real difference in people's lives.
                  </p>
                  <p>
                    I specialize in full-stack development with a particular focus on AI/ML applications. 
                    My approach combines technical expertise with creative problem-solving, always 
                    striving to build solutions that are not just functional, but delightful to use. 
                    I believe that great software should be both powerful and intuitive.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community. I believe 
                    in continuous learning and pushing the boundaries of what's possible with technology. 
                    Every day brings new challenges and opportunities to grow.
                  </p>
                  <p>
                    I'm passionate about creating technology that serves humanity, whether that's 
                    through AI applications that solve real-world problems, or intuitive interfaces 
                    that make complex tasks simple. My goal is to build software that not only works 
                    flawlessly but also brings joy to its users.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl shadow-lg p-12">
                <h3 className="text-3xl font-black text-gray-900 mb-12 text-center">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {skillList.map((skill, index) => (
                          <motion.span
                            key={skill}
                            className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 font-semibold rounded-full border border-orange-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-lg p-12">
                <h3 className="text-3xl font-black text-gray-900 mb-12 text-center">Work Experience</h3>
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {/* Timeline Line */}
                      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-500" />
                      
                      {/* Timeline Dot */}
                      <div className="absolute left-6 top-4 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg" />
                      
                      <div className="ml-16">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h4 className="text-2xl font-bold text-gray-900">{exp.title}</h4>
                          <span className="text-orange-600 font-bold text-lg">{exp.year}</span>
                        </div>
                        <p className="text-xl text-orange-500 font-semibold mb-4">{exp.company}</p>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0" />
                              <span className="text-lg">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-lg p-12">
                <h3 className="text-3xl font-black text-gray-900 mb-12 text-center">Education</h3>
                <div className="space-y-12">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {/* Timeline Line */}
                      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-500" />
                      
                      {/* Timeline Dot */}
                      <div className="absolute left-6 top-4 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg" />
                      
                      <div className="ml-16">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h4 className="text-2xl font-bold text-gray-900">{edu.degree}</h4>
                          <span className="text-orange-600 font-bold text-lg">{edu.year}</span>
                        </div>
                        <p className="text-xl text-orange-500 font-semibold mb-4">{edu.school}</p>
                        <p className="text-gray-600 text-lg leading-relaxed">{edu.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 