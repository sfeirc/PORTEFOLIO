'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ChatBubbleLeftRightIcon, 
  MicrophoneIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DocumentTextIcon,
  CloudIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  CloudArrowUpIcon,
  SunIcon,
  BeakerIcon,
  PresentationChartLineIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  DocumentDuplicateIcon,
  GlobeAltIcon,
  SparklesIcon,
  SwatchIcon,
  ServerIcon,
  ChartBarIcon,
  CubeIcon,
  CommandLineIcon as GameIcon,
  LightBulbIcon,
  ArrowTopRightOnSquareIcon,
  WindowIcon,
} from '@heroicons/react/24/outline';
import ProjectSkillsMatrix from './ProjectSkillsMatrix';
import { useState, useEffect } from 'react';
import { projects, skills, getProjectsByCategory, getProjectSkillNames } from '@/data/projects';
import type { Project as ProjectType } from '@/data/projects';

interface Technology {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Project {
  title: string;
  period: string;
  description: string;
  technologies: Technology[];
  features: string[];
  image: string;
  size: string;
  gradient: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  category: string;
  relatedTags: string[];
  projectImage?: string;
  isInternship: boolean;
}

interface ProjectsByCategory {
  [key: string]: ProjectType[];
}

interface ProfessionalProject {
  title: string;
  period: string;
  description: string;
  technologies: { name: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null }[];
  documents: {
    title: string;
    path: string;
    type: 'agreement' | 'mission';
  }[];
  projects: {
    title: string;
    description: string;
    technologies: { name: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null }[];
    features: string[];
    image?: string;
  }[];
}

interface ProfessionalProjectDetails {
  title: string;
  description: string;
  technologies: { name: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null }[];
  features: string[];
  image?: string;
}

const education = [
  {
    title: 'BTS Services informatiques aux organisations',
    subtitle: 'Option Solution logicielles et application métiers',
    school: 'Lycée Fénelon, La Rochelle',
    period: 'Septembre 2023 — juin 2025',
    description: 'Formation spécialisée en développement de solutions informatiques et applications métiers. (SLAM)',
    image: 'https://fenelon-notredame.com/wp-content/uploads/2022/01/logo-Fenelon-Notre-Dame-ensemble-scolaire-La-Rochelle.jpg',
    skills: [
      { name: 'Développement Web', icon: CodeBracketIcon },
      { name: 'Solutions Métiers', icon: WrenchScrewdriverIcon },
      { name: 'Base de données', icon: CloudIcon }
    ],
    keyPoints: [
      'Formation en développement logiciel',
      'Projets pratiques en entreprise',
      'Spécialisation en solutions métiers'
    ]
  },
  {
    title: 'Baccalauréat Sciences et Technologies de l\'Industrie et du Développement Durable',
    subtitle: 'Option Systèmes d\'Information et Numérique',
    school: 'Lycée Ort, Strasbourg',
    period: 'Septembre 2020 — juin 2022',
    description: 'Formation initiale en systèmes d\'information et développement numérique. (SIN)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlU0V7uj5tiA1arTvtYqyVFwzOrTeFFaysg&s',
    skills: [
      { name: 'Programmation', icon: null },
      { name: 'Systèmes d\'Information', icon: null },
      { name: 'Développement Durable', icon: null }
    ],
    keyPoints: [
      'Fondamentaux de la programmation',
      'Conception de systèmes d\'information',
      'Approche développement durable'
    ]
  }
];

// Professional projects data
const professionalProjects: ProfessionalProject[] = [
  {
    title: 'Excelia - École de Commerce',
    period: 'Février 2024 — Avril 2024',
    description: 'Stage de développement web et IA au sein du service informatique d\'Excelia Group.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'Node.js', icon: CodeBracketIcon },
      { name: 'Python', icon: CodeBracketIcon },
      { name: 'OpenAI', icon: CloudIcon }
    ],
    documents: [
      {
        title: 'Convention de stage',
        path: '/documents/convention-excelia.pdf',
        type: 'agreement'
      },
      {
        title: 'Attestation de fin de stage',
        path: '/documents/attestation-excelia.pdf',
        type: 'mission'
      }
    ],
    projects: [
      {
        title: 'Automatisation Blender 3D',
        description: 'Scripts Python pour automatiser les tâches répétitives dans Blender 3D, optimisant significativement le workflow.',
        technologies: [
          { name: 'Python', icon: CodeBracketIcon },
          { name: 'Blender API', icon: CodeBracketIcon },
          { name: 'Git', icon: CodeBracketIcon }
        ],
        features: [
          'Automatisation des tâches répétitives',
          'Interface utilisateur intégrée',
          'Documentation technique'
        ]
      },
      {
        title: 'Optimisation Plans Interactifs',
        description: 'Optimisation des performances d\'une application web utilisant Babylon.js pour l\'affichage de plans interactifs en 3D.',
        technologies: [
          { name: 'Babylon.js', icon: CodeBracketIcon },
          { name: 'JavaScript', icon: CodeBracketIcon },
          { name: 'HTML/CSS', icon: CodeBracketIcon }
        ],
        features: [
          'Optimisation des performances',
          'Refactorisation du code',
          'Plans 3D interactifs'
        ]
      }
    ]
  },
  {
    title: 'Excelia - École de Commerce',
    period: 'Mai 2024 — Juillet 2024',
    description: 'Stage de développement d\'applications IA au sein du service informatique d\'Excelia Group.',
    technologies: [
      { name: 'Python', icon: CodeBracketIcon },
      { name: 'Flask', icon: CodeBracketIcon },
      { name: 'OpenAI', icon: CloudIcon },
      { name: 'Google Cloud', icon: CloudIcon }
    ],
    documents: [
      {
        title: 'Convention de stage',
        path: '/documents/convention-excelia-2.pdf',
        type: 'agreement'
      },
      {
        title: 'Attestation de fin de stage',
        path: '/documents/attestation-excelia-2.pdf',
        type: 'mission'
      }
    ],
    projects: [
      {
        title: 'Chatbot intelligent avec OpenAI et Google Cloud API',
        description: 'Conception d\'un chatbot bilingue avec outils administratifs pour la gestion de documents et l\'affinage du modèle.',
        technologies: [
          { name: 'Python/Flask', icon: CodeBracketIcon },
          { name: 'JavaScript', icon: CodeBracketIcon },
          { name: 'OpenAI API', icon: CloudIcon },
          { name: 'Google Cloud Storage', icon: CloudIcon }
        ],
        features: [
          'Conception d\'un chatbot bilingue avec outils administratifs',
          'Amélioration de la précision grâce à un entraînement IA spécifique',
          'Interface responsive pour le suivi des performances'
        ]
      },
      {
        title: 'Chatbot intelligent avec Fine Tuning OpenAI',
        description: 'Chatbot bilingue avec fine-tuning et gestion avancée des documents via Google Cloud.',
        technologies: [
          { name: 'Python/Flask', icon: CodeBracketIcon },
          { name: 'JavaScript', icon: CodeBracketIcon },
          { name: 'OpenAI API', icon: CloudIcon },
          { name: 'Google Cloud', icon: CloudIcon }
        ],
        features: [
          'Interface de chat bilingue (FR/EN)',
          'Panneau d\'administration pour la gestion des documents',
          'Fine-tuning GPT-4 et o1-mini'
        ]
      },
      {
        title: 'Simulation d\'entretien en temps réel (voix)',
        description: 'Outil de simulation d\'entretiens alimenté par IA avec retours personnalisés et tonalité vocale réaliste.',
        technologies: [
          { name: 'React', icon: CodeBracketIcon },
          { name: 'Next.js', icon: CodeBracketIcon },
          { name: 'Tailwind CSS', icon: CodeBracketIcon },
          { name: 'OpenAI API', icon: CloudIcon }
        ],
        features: [
          'Simulations d\'entretiens configurables',
          'Retours personnalisés par IA',
          'Tonalité vocale hautement réaliste'
        ]
      }
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [selectedProfessionalProject, setSelectedProfessionalProject] = useState<ProfessionalProject | null>(null);
  const [selectedProfessionalProjectDetails, setSelectedProfessionalProjectDetails] = useState<ProfessionalProjectDetails | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<{ title: string; path: string; } | null>(null);
  const [showMatrix, setShowMatrix] = useState(false);
  const projectsByCategory: ProjectsByCategory = getProjectsByCategory();

  // Get project tags from the skills data
  const getProjectTags = (project: ProjectType) => {
    return project.skills.map(skill => skill.name);
  };

  // Add effect to handle body scroll for all modals
  useEffect(() => {
    if (selectedProject || selectedProfessionalProject || selectedDocument || selectedProfessionalProjectDetails) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [selectedProject, selectedProfessionalProject, selectedDocument, selectedProfessionalProjectDetails]);

  return (
    <>
      <section id="projets" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
              Projets
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Découvrez mes réalisations et projets
            </p>
          </motion.div>

          <div className="flex flex-col items-center mb-16">
            <button
              onClick={() => setShowMatrix(!showMatrix)}
              className="glass px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition-colors duration-300 flex items-center gap-2 group"
            >
              {showMatrix ? (
                <>
                  <span>Voir les projets</span>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-secondary group-hover:rotate-45 transition-transform duration-300" />
                </>
              ) : (
                <>
                  <span>Voir la matrice de compétences</span>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-secondary group-hover:rotate-45 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>

          {showMatrix ? (
            <ProjectSkillsMatrix />
          ) : (
            <>
              {/* Formation */}
              <div id="formation" className="mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                    Formation
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col h-full"
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={edu.image}
                            alt={edu.school}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">{edu.title}</h4>
                          <p className="text-secondary text-sm">{edu.subtitle}</p>
                          <p className="text-gray-400 mt-1">{edu.school}</p>
                          <p className="text-gray-500 text-sm">{edu.period}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6">{edu.description}</p>
                      <div className="mt-auto">
                        <h5 className="text-md font-semibold mb-3">Points clés :</h5>
                        <ul className="space-y-2">
                          {edu.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-secondary mt-1">•</span>
                              <span className="text-gray-300">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Professional Projects Section */}
              <div id="stages" className="mb-20">
                <div id="projets-pro">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                  >
                    <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                      Stages
                    </h3>
                  </motion.div>

                  <div className="space-y-16">
                    {professionalProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
                      >
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                            <p className="text-secondary mb-4">{project.period}</p>
                            <p className="text-gray-300 mb-6">{project.description}</p>

                            <div className="mb-6">
                              <h5 className="text-md font-semibold mb-3">Technologies :</h5>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors"
                                  >
                                    {tech.name}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h5 className="text-md font-semibold">Projets réalisés :</h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.projects.map((subProject, subIndex) => (
                                  <div
                                    key={subIndex}
                                    className="glass p-4 rounded-lg border border-white/5 hover:border-white/20 cursor-pointer transition-colors duration-300"
                                    onClick={() => {
                                      setSelectedProfessionalProject(project);
                                      setSelectedProfessionalProjectDetails(subProject);
                                    }}
                                  >
                                    <h6 className="text-md font-semibold mb-2">{subProject.title}</h6>
                                    <p className="text-gray-400 text-sm line-clamp-2">{subProject.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="md:w-1/3 flex flex-col">
                            <div className="mb-6">
                              <h5 className="text-md font-semibold mb-3">Documents :</h5>
                              <div className="space-y-2">
                                {project.documents.map((doc, docIndex) => (
                                  <button
                                    key={docIndex}
                                    className="glass w-full p-3 rounded-lg border border-white/5 hover:border-white/20 transition-colors duration-300 flex items-center gap-3 text-left"
                                    onClick={() => setSelectedDocument(doc)}
                                  >
                                    <div className="bg-white/10 rounded-full p-2">
                                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                      </svg>
                                    </div>
                                    <div>
                                      <span className="block font-medium">{doc.title}</span>
                                      <span className="text-gray-400 text-sm">
                                        {doc.type === 'agreement' ? 'Convention' : 'Attestation'}
                                      </span>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects by Category */}
              {Object.keys(projectsByCategory).filter(category => category !== 'Projets Pro').map((category) => (
                <div key={category} className="mb-20" id={category.toLowerCase().replace(/\s+/g, '-')}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                  >
                    <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                      {category}
                    </h3>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsByCategory[category].map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`glass rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full hover:scale-[1.02] ${project.size}`}
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className={`h-36 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                          <project.icon className="w-16 h-16 text-white" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
                            <p className="text-secondary text-sm">{project.period}</p>
                          </div>
                          <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                          
                          <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-white/5 rounded-full text-xs flex items-center gap-1"
                                >
                                  {tech.icon && <tech.icon className="w-3 h-3" />}
                                  {tech.name}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="px-2 py-1 bg-white/5 rounded-full text-xs">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              {getProjectTags(project).slice(0, 2).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="text-xs text-gray-400"
                                >
                                  #{tag.split(' ')[0].toLowerCase()}
                                  {tagIndex < Math.min(getProjectTags(project).length, 2) - 1 && ' '}
                                </span>
                              ))}
                              {getProjectTags(project).length > 2 && (
                                <span className="text-xs text-gray-400">
                                  +{getProjectTags(project).length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                  {selectedProject.title}
                </h3>
                <p className="text-secondary">{selectedProject.period}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
                  <h4 className="text-lg font-semibold mb-4">Compétences appliquées</h4>
                  <div className="space-y-4">
                    {selectedProject.skills.map((skill, idx) => (
                      <div key={idx} className="glass p-4 rounded-lg border border-white/10">
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

      {/* Professional Project Modal */}
      {selectedProfessionalProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProfessionalProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass p-8 rounded-lg w-full max-w-7xl h-[95vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                {selectedProfessionalProject.title}
              </h3>
              <button
                onClick={() => setSelectedProfessionalProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
              {/* Left column: Info */}
              <div className="lg:col-span-1 flex flex-col overflow-y-auto">
                <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden border-2 border-secondary/30 bg-white p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://play-lh.googleusercontent.com/eLFM1GELLZrKL849EB3b9o-91dJ7wWLJ535-3tz3QE-lzv3XZu26aYAiyxMVxOVG19w"
                      alt="Excelia Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 64px) 100vw, 64px"
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{selectedProfessionalProject.period}</p>
                <p className="text-gray-300 mb-4">{selectedProfessionalProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfessionalProject.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        {tech.icon && <tech.icon className="w-4 h-4 text-secondary" />}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Documents de Stage :</h4>
                  <div className="flex flex-col gap-2">
                    {selectedProfessionalProject.documents.map((doc) => (
                      <button
                        key={doc.path}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDocument(doc);
                        }}
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-left"
                      >
                        <DocumentTextIcon className="w-5 h-5 text-secondary" />
                        <span className="text-sm text-gray-300">{doc.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right column: Projects */}
              <div className="lg:col-span-2 flex flex-col overflow-y-auto">
                <h4 className="text-lg font-semibold mb-4">Projets réalisés</h4>
                <div className="flex flex-col gap-6">
                  {selectedProfessionalProject.projects.map((project, index) => (
                    <div
                      key={index}
                      className="mb-6 last:mb-0 glass p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProfessionalProjectDetails(project);
                      }}
                    >
                      <h5 className="text-md font-semibold mb-2">{project.title}</h5>
                      <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                      
                      <div className="mb-3">
                        <h6 className="text-sm font-medium text-gray-400 mb-2">Technologies :</h6>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors flex items-center gap-1"
                            >
                              {tech.icon && <tech.icon className="w-3 h-3 text-secondary" />}
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h6 className="text-sm font-medium text-gray-400 mb-2">Fonctionnalités :</h6>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm">
                              <span className="text-secondary">•</span>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Document Viewer Modal */}
      {selectedDocument && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[60]"
          onClick={() => setSelectedDocument(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full h-full max-w-7xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                {selectedDocument.title}
              </h3>
              <button
                onClick={() => setSelectedDocument(null)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 bg-white rounded-lg overflow-hidden">
              <iframe
                src={selectedDocument.path}
                className="w-full h-full"
                title={selectedDocument.title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Internship Project Modal */}
      {selectedProfessionalProjectDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[70]"
          onClick={() => setSelectedProfessionalProjectDetails(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass p-8 rounded-lg w-full max-w-7xl h-[90vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                {selectedProfessionalProjectDetails.title}
              </h3>
              <button
                onClick={() => setSelectedProfessionalProjectDetails(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 min-h-0">
              {/* Left column: Project info */}
              <div className="flex flex-col overflow-y-auto">
                <p className="text-gray-300 mb-6">{selectedProfessionalProjectDetails.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfessionalProjectDetails.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        {tech.icon && <tech.icon className="w-4 h-4 text-secondary" />}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Fonctionnalités :</h4>
                  <ul className="space-y-2">
                    {selectedProfessionalProjectDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right column: Project image */}
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold mb-4">Aperçu du Projet</h4>
                {selectedProfessionalProjectDetails.image ? (
                  <div className="relative flex-1 rounded-xl overflow-hidden border-2 border-secondary/30">
                    <Image
                      src={selectedProfessionalProjectDetails.image}
                      alt={`${selectedProfessionalProjectDetails.title} Preview`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="flex-1 rounded-xl border-2 border-secondary/30 flex items-center justify-center text-gray-400">
                    Image du projet à venir
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects; 