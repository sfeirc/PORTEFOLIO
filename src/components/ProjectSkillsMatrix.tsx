'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { skills, projects, getProjectsBySkill, getSkillColor } from '@/data/projects';
import type { Skill, Project } from '@/data/projects';

const ProjectSkillsMatrix: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Reset animation state on component mount
  useEffect(() => {
    setSkillsVisible(true);
  }, []);

  return (
    <div className="w-full space-y-12">
      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={skillsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass p-6 rounded-lg border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-br ${skill.color}`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{skill.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {getProjectsBySkill(skill.title).slice(0, 3).map((project) => (
                <span
                  key={project.id}
                  className="px-3 py-1 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors"
                >
                  {project.title}
                </span>
              ))}
              {getProjectsBySkill(skill.title).length > 3 && (
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors">
                  +{getProjectsBySkill(skill.title).length - 3}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass p-8 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${selectedSkill.color}`}>
                    <selectedSkill.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                      {selectedSkill.title}
                    </h3>
                    <p className="text-gray-400">{selectedSkill.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getProjectsBySkill(selectedSkill.title).map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass p-6 rounded-lg border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-full bg-gradient-to-br ${project.gradient}`}>
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div>
                      <h5 className="text-sm font-medium text-gray-400 mb-2">Compétence appliquée :</h5>
                      <div className="bg-white/5 p-3 rounded-lg">
                        {project.skills.find(s => s.name === selectedSkill.title)?.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[60]"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass p-8 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setSelectedSkill(null);
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowPathIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-4">Fonctionnalités</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Applications des compétences</h4>
                    <div className="space-y-4">
                      {selectedProject.skills.map((skill, idx) => (
                        <div 
                          key={idx} 
                          className={`glass p-4 rounded-lg border border-white/10 ${
                            selectedSkill && skill.name === selectedSkill.title ? 'border-secondary' : ''
                          }`}
                        >
                          <h5 className="text-md font-semibold mb-2">{skill.name}</h5>
                          <p className="text-gray-300 text-sm">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <div className="glass p-6 rounded-lg border border-white/10 sticky top-6">
                    <h4 className="text-lg font-semibold mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="px-3 py-2 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                          {tech.icon && <tech.icon className="w-5 h-5 text-secondary" />}
                          {tech.name}
                        </div>
                      ))}
                    </div>
                    
                    {selectedProject.projectImage && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-4">Image du projet</h4>
                        <div className="rounded-lg overflow-hidden border border-white/10">
                          <img 
                            src={selectedProject.projectImage} 
                            alt={selectedProject.title}
                            className="w-full h-auto" 
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectSkillsMatrix; 