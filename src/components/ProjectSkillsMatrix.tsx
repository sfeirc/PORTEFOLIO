'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, DocumentIcon, DocumentDuplicateIcon, BeakerIcon, CpuChipIcon, SparklesIcon } from '@heroicons/react/24/outline';
import usePortfolioData, { SkillDetail } from '@/data/usePortfolioData';

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
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const ProjectSkillsMatrix: React.FC = () => {
  const { skills, projects, getProjectsBySkill } = usePortfolioData();
  
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectSkill, setSelectedProjectSkill] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isMatrixInView, setIsMatrixInView] = useState(false);
  const matrixRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerPlaceholderRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to detect when the matrix is in view
  useEffect(() => {
    // Create references to DOM nodes that won't change during the effect lifecycle
    const matrixNode = matrixRef.current;
    const headerPlaceholderNode = headerPlaceholderRef.current;

    const matrixObserver = new IntersectionObserver(
      (entries) => {
        // Matrix visibility is only used by the headerObserver, no need to track separately
        if (!entries[0].isIntersecting) {
          // If matrix is not visible, ensure header is hidden
          setIsHeaderVisible(false);
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    // Create a separate observer for the header placeholder
    const headerObserver = new IntersectionObserver(
      (entries) => {
        // Show fixed header when original header is leaving viewport (negative ratio means it's exiting at the top)
        if (entries[0].isIntersecting) {
          setIsHeaderVisible(false);
        } else {
          // Check if the header is above the viewport (scrolled past it) AND we're significantly scrolled down
          if (entries[0].boundingClientRect.y < -100 && window.scrollY > 300) {
            setIsHeaderVisible(true);
          } else {
            setIsHeaderVisible(false);
          }
        }
      },
      { 
        threshold: [0, 0.1, 0.5, 1],
        rootMargin: '-200px 0px 0px 0px' // Start transition when header is 200px from top edge
      }
    );

    if (matrixNode) {
      matrixObserver.observe(matrixNode);
    }
    
    if (headerPlaceholderNode) {
      headerObserver.observe(headerPlaceholderNode);
    }

    return () => {
      if (matrixNode) {
        matrixObserver.unobserve(matrixNode);
      }
      if (headerPlaceholderNode) {
        headerObserver.unobserve(headerPlaceholderNode);
      }
    };
  }, []);

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
    const project = projects.find(p => p.id === projectId);
    const skill = skills.find(s => s.id === skillId);
    
    if (project && skill) {
      setSelectedProject(project);
      setSelectedSkill(skill);
    }
  };

  return (
    <div className="relative" ref={matrixRef}>
      {/* Fixed Header that shows when the matrix is visible */}
      <motion.div 
        ref={headerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isHeaderVisible ? 0 : -100,
          opacity: isHeaderVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-30 pt-4 pb-4 bg-dark-300/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/10"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-[200px_repeat(6,1fr)] gap-4 min-w-[800px] max-w-7xl mx-auto">
            <div className="h-12 flex items-center justify-center">
              <span className="font-medium text-white/80">Projets</span>
            </div>
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
        </div>
      </motion.div>
      
      {/* Matrix Grid */}
      <div className="overflow-x-auto overflow-y-visible">
        <div className="min-w-[800px] relative">
          {/* Header Row - non-sticky version that stays in the normal document flow */}
          <motion.div 
            ref={headerPlaceholderRef} 
            className="pt-2 pb-4"
            animate={{ 
              opacity: isHeaderVisible ? 0 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid grid-cols-[200px_repeat(6,1fr)] gap-4">
              <div className="h-12 flex items-center justify-center">
                <span className="font-medium text-white/80">Projets</span>
              </div>
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
          </motion.div>

          {/* Add spacing when fixed header is visible */}
          <motion.div 
            animate={{ 
              height: isHeaderVisible ? '70px' : '0px'
            }}
            transition={{ duration: 0.2 }}
            className="w-full"
          />

          {/* Project Rows */}
          <div className="mt-2">
            {projects.map((project) => (
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
                  const hasSkill = project.skillDetails.some((s: SkillDetail) => s.name === skill.title);
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
      </div>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative glass p-8 rounded-lg max-w-2xl w-full mx-4 max-h-[85vh] flex flex-col border border-white/10"
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

              <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Projets liés :</h4>
                <div className="space-y-3">
                  {getProjectsBySkill(selectedSkill.id).map((project) => (
                    <motion.div
                      key={project.id}
                      whileHover={{ scale: 1.02 }}
                      className="glass p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                      onClick={() => {
                        setSelectedSkill(null);
                        setTimeout(() => {
                          openProjectDetails(project.id, selectedSkill.id);
                        }, 300);
                      }}
                    >
                      <h5 className="font-medium mb-1">{project.title}</h5>
                      <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project+Skill Detail Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => {
              setSelectedProject(null);
              setSelectedProjectSkill(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gradient-to-b from-gray-900/95 to-gray-800/95 p-8 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto border border-white/10 shadow-xl relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setSelectedProjectSkill(null);
                  }}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors group"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </button>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-secondary/20 bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center shadow-lg">
                  {selectedProject.icon ? (
                    <selectedProject.icon className="w-8 h-8 text-secondary" />
                  ) : (
                    <DocumentIcon className="w-8 h-8 text-secondary" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    {selectedProjectSkill && (
                      <span className="text-sm px-3 py-1.5 bg-secondary/20 text-secondary rounded-full border border-secondary/20">
                        {skills.find(s => s.id === selectedProjectSkill)?.title}
                      </span>
                    )}
                    {selectedProject.isInternship && (
                      <span className="text-sm px-3 py-1.5 bg-white/5 text-white/80 rounded-full border border-white/10">
                        Stage
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-white/90 flex items-center gap-2 mb-3">
                    <DocumentDuplicateIcon className="w-5 h-5 text-secondary" />
                    Description
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                {selectedProjectSkill && (
                  <div className="glass p-6 rounded-xl bg-secondary/5 border border-secondary/20">
                    <h4 className="text-lg font-semibold text-white/90 flex items-center gap-2 mb-4">
                      <BeakerIcon className="w-5 h-5 text-secondary" />
                      Compétence spécifique
                    </h4>
                    <div className="space-y-2">
                      <p className="text-secondary font-medium">
                        {skills.find(s => s.id === selectedProjectSkill)?.title}
                      </p>
                      <p className="text-gray-300">
                        {selectedProject.skillDetails.find(
                          skill => skill.name === skills.find(s => s.id === selectedProjectSkill)?.title
                        )?.description}
                      </p>
                    </div>
                  </div>
                )}

                {selectedProject.technologies && (
                  <div>
                    <h4 className="text-lg font-semibold text-white/90 flex items-center gap-2 mb-4">
                      <CpuChipIcon className="w-5 h-5 text-secondary" />
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm flex items-center gap-2 border border-white/10 transition-colors"
                        >
                          {tech.icon && <tech.icon className="w-4 h-4 text-secondary" />}
                          <span className="text-gray-300">{tech.name}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.features && (
                  <div>
                    <h4 className="text-lg font-semibold text-white/90 flex items-center gap-2 mb-4">
                      <SparklesIcon className="w-5 h-5 text-secondary" />
                      Fonctionnalités clés
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectSkillsMatrix; 