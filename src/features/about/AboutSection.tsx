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
  Heart,
  Monitor,
  Server,
  Cpu,
  Wrench,
  Atom,
  Database,
  GitBranch,
  Layers,
  Terminal,
  Box,
  Globe,
  FileJson,
  Bot,
  Network,
  HardDrive,
  Cog,
  Lock,
  Cloud
} from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('story');

  const skills = {
    "Frontend Development": {
      icon: Monitor,
      skills: [
        { name: "React", icon: Atom },
        { name: "TypeScript", icon: FileJson },
        { name: "Tailwind CSS", icon: Layers },
        { name: "Framer Motion", icon: Zap }
      ]
    },
    "Backend Development": {
      icon: Server,
      skills: [
        { name: "Python", icon: Bot },
        { name: "Django", icon: Globe },
        { name: "FastAPI", icon: Zap },
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: HardDrive }
      ]
    },
    "AI/ML": {
      icon: Cpu,
      skills: [
        { name: "PyTorch", icon: Brain },
        { name: "Scikit-learn", icon: Network },
        { name: "OpenAI API", icon: Cloud },
        { name: "LlamaIndex", icon: FileJson },
        { name: "Qdrant", icon: Database }
      ]
    },
    "DevOps & Tools": {
      icon: Wrench,
      skills: [
        { name: "Docker", icon: Box },
        { name: "Git", icon: GitBranch },
        { name: "CI/CD", icon: Cog },
        { name: "Linux", icon: Terminal }
      ]
    }
  };

  const experiences = [
    {
      year: "August 2023 - Present",
      title: "Software Engineer",
      company: "QuickFox Consulting, Lalitpur, Nepal",
      description: "Contributing to the design and development of intelligent document processing and automation systems for enterprise clients. The role emphasizes building scalable backend infrastructure, applying natural language processing (NLP) techniques, and integrating advanced machine learning models to optimize real-world financial and operational workflows.",
      achievements: [
        "Designed and implemented a robust Retrieval-Augmented Generation (RAG) system using FastAPI and LlamaIndex for real-time document QA.",
        "Engineered backend infrastructure to support scalable document ingestion and semantic search workflows.",
        "Automated cheque clearing processes through an intelligent agent-based system, reducing manual effort and operational errors.",
        "Developed a custom Nepali OCR module tailored for cheque data extraction, significantly improving accuracy in technical clearing workflows.",
      ]
    },
    {
      year: "April 2023 - August 2023",
      title: "Internship",
      company: "QuickFox Consulting, Lalitpur, Nepal",
      description: "Worked as part of the research and development team, focusing on automation and intelligent document processing solutions for enterprise clients. The role involved applying machine learning techniques, exploring Robotic Process Automation (RPA), and experimenting with signature verification models to improve document security and reliability.",
      achievements: [
        "Contributed to initiatives on intelligent document systems and automation solutions for enterprise clients.",
        "Gained hands-on experience with Robotic Process Automation (RPA) using Robot Framework.",
        "Researched signature verification and document OCR techniques.",
        "Developed a signature verification model leveraging a Siamese Network and implemented a triplet loss function for improved accuracy."
      ]
    }
  ];


  const education = [
    {
      degree: "Bachelor's in Science Computer Science and Information Technology",
      school: "Institute of Science and Technology, Tribhuvan University, Nepal",
      year: "2018-2023",
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
                className={`flex items-center gap-3 px-8 py-4 text-white/90 rounded-full font-bold text-lg transition-all duration-200 tracking-wide ${activeTab === tab.id
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
                    I began my career as an intern at <strong>QuickFox Consulting</strong> in April 2023, where I was introduced to intelligent document systems and automation solutions. During this period, I explored <strong>Robotic Process Automation (RPA)</strong>, experimented with document OCR technologies, and developed a <strong>signature verification model</strong> using Siamese Networks with a triplet loss function. This experience gave me a strong foundation in applying machine learning to real-world document processing challenges.
                  </p>
                  <p>
                    In August 2023, I transitioned into a <strong>full-time Software Engineer</strong> role at QuickFox Consulting. Since then, I have been leading projects at the intersection of backend engineering and AI-powered automation, including building a <strong>Retrieval-Augmented Generation (RAG) system</strong>, automating <strong>cheque clearing workflows</strong>, and developing a <strong>custom Nepali OCR module</strong> for high-accuracy data extraction. This journey has allowed me to combine my passion for research with practical engineering, delivering impactful solutions for enterprise clients.
                  </p>
                  <p>
                    Outside of coding, I enjoy exploring emerging technologies, contributing to open-source projects, and sharing knowledge with the developer community. I believe in <strong>continuous learning</strong> and in pushing the boundaries of what’s possible with technology—every challenge brings new opportunities to grow. </p> <p> I am deeply passionate about creating technology that serves people—whether through <strong>AI applications</strong> that solve real-world problems or intuitive interfaces that make complex tasks simple. My goal is to build software that not only works flawlessly but also delivers meaningful and enjoyable user experiences.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl shadow-lg p-12">
                <h3 className="text-3xl font-black text-gray-900 mb-12 text-center">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(skills).map(([category, { icon: CategoryIcon, skills: skillList }], categoryIndex) => (
                    <motion.div
                      key={category}
                      className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.1 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-orange-500 rounded-xl text-white">
                          <CategoryIcon size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800">{category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {skillList.map((skill, skillIndex) => {
                          const SkillIcon = skill.icon;
                          return (
                            <motion.span
                              key={skill.name}
                              className="px-4 py-2 bg-white text-orange-700 font-semibold rounded-full border border-orange-200 shadow-sm flex items-center gap-2"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                              whileHover={{ scale: 1.05, backgroundColor: "#fff7ed" }}
                            >
                              <SkillIcon size={16} />
                              {skill.name}
                            </motion.span>
                          );
                        })}
                      </div>
                    </motion.div>
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