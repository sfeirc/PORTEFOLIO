'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { skills, projectsData } from '@/data/projectsData';

interface Skill {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: { name: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[];
  features: string[];
  skillDetails: { name: string; description: string }[];
  isInternship?: boolean;
}

const ProjectSkillsMatrix: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectSkill, setSelectedProjectSkill] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Add effect to handle body scroll for both modals
  useEffect(() => {
    if (selectedSkill || (selectedProject && selectedProjectSkill)) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [selectedSkill, selectedProject, selectedProjectSkill]);

  const openProjectDetails = (projectId: string, skillId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    const skill = skills.find(s => s.id === skillId);
    
    if (project && skill) {
      setSelectedProject(project);
      setSelectedSkill(skill);
      setShowModal(true);
    }
  };

  const getSkillsForProject = (projectId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return [];
    
    return project.skillDetails.map(skill => skill.name);
  };

  const getProjectsForSkill = (skillId: string) => {
    const skill = skills.find(s => s.id === skillId);
    if (!skill) return [];
    
    return projectsData.filter(project => 
      project.skillDetails.some(s => s.name === skill.title)
    );
  };

  return (
    <div className="relative">
      {/* Matrix Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header Row */}
          <div className="grid grid-cols-[200px_repeat(6,1fr)] gap-4 mb-4">
            <div className="h-12" /> {/* Empty cell for alignment */}
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSkill(skill)}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative glass p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
                  <div className="flex flex-col items-center gap-2">
                    <skill.icon className="w-6 h-6 text-secondary" />
                    <span className="text-xs text-center font-medium">{skill.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Rows */}
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid grid-cols-[200px_repeat(6,1fr)] gap-4 mb-4 ${
                project.isInternship ? 'bg-secondary/5 rounded-lg p-2' : ''
              }`}
            >
              <div className={`glass p-3 rounded-lg border ${
                project.isInternship ? 'border-secondary/50' : 'border-white/10'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{project.title}</span>
                  {project.isInternship && (
                    <span className="px-2 py-0.5 bg-secondary/20 text-secondary text-xs rounded-full">
                      Stage
                    </span>
                  )}
                </div>
              </div>
              {skills.map((skill) => {
                const hasSkill = project.skillDetails.some((s) => s.name === skill.title);
                return (
                  <motion.div
                    key={skill.id}
                    whileHover={hasSkill ? { scale: 1.1 } : undefined}
                    className={`relative group ${hasSkill ? 'cursor-pointer' : ''}`}
                    onClick={() => {
                      if (hasSkill) {
                        setSelectedProject(project);
                        setSelectedProjectSkill(skill.id);
                      }
                    }}
                  >
                    <div className={`relative glass p-3 rounded-lg border transition-colors duration-300 overflow-hidden ${
                      hasSkill
                        ? 'border-secondary/50 bg-secondary/10 hover:bg-secondary/20'
                        : 'border-white/10 hover:border-white/20'
                    }`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="w-full h-full flex items-center justify-center relative">
                        {hasSkill && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-secondary"
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative glass p-8 rounded-lg max-w-2xl w-full mx-4 border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedSkill.color} flex items-center justify-center`}>
                  <selectedSkill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  {selectedSkill.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6">
                {selectedSkill.description}
              </p>

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-3">Projets liés :</h4>
                <div className="flex flex-wrap gap-2">
                  {projectsData
                    .filter(project => project.skillDetails.some((s) => s.name === selectedSkill.title))
                    .map(project => (
                      <span
                        key={project.id}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors"
                      >
                        {project.title}
                      </span>
                    ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project-Skill Details Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectSkill && selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => {
              setSelectedProject(null);
              setSelectedProjectSkill(null);
              setSelectedSkill(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass p-8 rounded-lg w-full max-w-4xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                  Détails du projet
                </h3>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setSelectedProjectSkill(null);
                    setSelectedSkill(null);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedSkill.color} flex items-center justify-center`}>
                  <selectedSkill.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400">
                    {selectedSkill.title}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Application dans le projet :</h4>
                  <p className="text-gray-300">
                    {selectedProject.skillDetails.find(s => s.name === selectedSkill.title)?.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech.name} className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full text-sm">
                        <tech.icon className="w-4 h-4" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Caractéristiques :</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {selectedProject.features.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-secondary">
                  <ArrowPathIcon className="w-4 h-4" />
                  <span className="text-sm">Cliquez sur d'autres cellules pour explorer les compétences</span>
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