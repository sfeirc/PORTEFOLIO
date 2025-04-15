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
import projectsData from '@/data/projectsData';

interface Technology {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Project {
  id: string;
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
  skillDetails: {
    name: string;
    description: string;
  }[];
}

interface ProjectsByCategory {
  [key: string]: Project[];
}

interface ProfessionalProject {
  title: string;
  period: string;
  description: string;
  technologies: { name: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[];
  documents: {
    title: string;
    path: string;
    type: 'agreement' | 'mission';
  }[];
  projects: {
    title: string;
    description: string;
    technologies: { name: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[];
    features: string[];
    image?: string;
  }[];
}

interface ProfessionalProjectDetails {
  title: string;
  description: string;
  technologies: { name: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[];
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
      { name: 'Programmation', icon: CodeBracketIcon },
      { name: 'Systèmes d\'Information', icon: CpuChipIcon },
      { name: 'Développement Durable', icon: CloudArrowUpIcon }
    ],
    keyPoints: [
      'Fondamentaux de la programmation',
      'Conception de systèmes d\'information',
      'Approche développement durable'
    ]
  }
];

// Use the projectsData from the imported file
const projects: Project[] = projectsData.map(project => {
  // Add relatedTags based on skillDetails
  const relatedTags = project.skillDetails.map(skill => skill.name.toLowerCase());
  return {
    ...project,
    relatedTags
  };
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProfessionalProject, setSelectedProfessionalProject] = useState<ProfessionalProject | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<{ title: string; path: string } | null>(null);
  const [selectedInternshipProject, setSelectedInternshipProject] = useState<ProfessionalProjectDetails | null>(null);
  
  // Add effect to handle body scroll for all modals
  useEffect(() => {
    if (selectedProject || selectedProfessionalProject || selectedDocument || selectedInternshipProject) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [selectedProject, selectedProfessionalProject, selectedDocument, selectedInternshipProject]);

  // Group projects by category
  const projectsByCategory = projects.reduce<ProjectsByCategory>((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <section id="projets" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
        </motion.div>

        {/* Formation Section */}
        <div id="formation" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
              Formation
            </h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto mb-20">
            {/* Timeline line */}
            <div className="absolute left-0 h-full w-0.5 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/50" />
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0 pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full z-10" />
                
                <div className="relative glass p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="relative w-12 h-12 bg-white/5 rounded-full p-2 flex-shrink-0">
                      <Image
                        src={edu.image}
                        alt="School Logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 48px) 100vw, 48px"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <DocumentTextIcon className="w-5 h-5 text-secondary" />
                        <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                          {edu.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{edu.subtitle}</p>
                      <p className="text-gray-400 text-sm mb-1">{edu.school}</p>
                      <p className="text-gray-400 text-sm font-medium">{edu.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mt-4">{edu.description}</p>
                  
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-2 py-1 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors flex items-center gap-1"
                        >
                          <skill.icon className="w-3 h-3 text-secondary" />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
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
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
              Stages
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {/* Stage Excelia 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProfessionalProject({
                title: "Stage Excelia",
                period: "Janvier 2025 — Mars 2025",
                description: "Stage au sein d'Excelia, axé sur le développement d'applications innovantes pour améliorer l'expérience étudiante.",
                technologies: [
                  { name: "Next.js", icon: CodeBracketIcon },
                  { name: "React.js", icon: CodeBracketIcon },
                  { name: "Elevenlabs API", icon: CpuChipIcon }
                ],
                documents: [
                  {
                    title: "Convention de stage",
                    path: "/internships/excelia-internship-agreement-1.pdf",
                    type: "agreement"
                  },
                  {
                    title: "Fiche de mission",
                    path: "/internships/excelia-internship-mission-1.pdf",
                    type: "mission"
                  }
                ],
                projects: [
                  {
                    title: "Simulateur d'entretien d'embauche",
                    description: "Développement d'un simulateur d'entretien utilisant l'IA pour aider les étudiants à préparer leurs entretiens professionnels.",
                    technologies: [
                      { name: "Next.js", icon: CodeBracketIcon },
                      { name: "React.js", icon: CodeBracketIcon },
                      { name: "Elevenlabs API", icon: CpuChipIcon }
                    ],
                    features: [
                      "Interface conversationnelle en temps réel",
                      "Analyse du langage et des réponses",
                      "Feedback personnalisé",
                      "Voix synthétisée réaliste"
                    ]
                  }
                ]
              })}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative glass p-8 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 bg-white/5 rounded-full p-2">
                    <Image
                      src="https://play-lh.googleusercontent.com/eLFM1GELLZrKL849EB3b9o-91dJ7wWLJ535-3tz3QE-lzv3XZu26aYAiyxMVxOVG19w"
                      alt="Excelia Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 64px) 100vw, 64px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      Stage Excelia
                    </h3>
                    <p className="text-gray-400 text-sm">Janvier 2025 — Mars 2025</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Stage au sein d'Excelia, axé sur le développement d'applications innovantes pour améliorer l'expérience étudiante.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies principales :</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                      <CodeBracketIcon className="w-4 h-4 text-secondary" />
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                      <CpuChipIcon className="w-4 h-4 text-secondary" />
                      Elevenlabs API
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stage Excelia 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProfessionalProject({
                title: "Stage Excelia",
                period: "Mai 2024 — Juillet 2024",
                description: "Stage de fin d'année chez Excelia, focalisé sur l'automatisation des processus, l'optimisation web et le développement d'outils d'assistance intelligents.",
                technologies: [
                  { name: "Python", icon: CommandLineIcon },
                  { name: "Flask", icon: CodeBracketIcon },
                  { name: "OpenAI GPT-4", icon: CpuChipIcon },
                  { name: "Babylon.js", icon: CubeIcon },
                  { name: "Blender API", icon: CodeBracketIcon },
                  { name: "Base de données vectorielle", icon: CircleStackIcon },
                  { name: "Architecture RAG", icon: ServerIcon }
                ],
                documents: [
                  {
                    title: "Convention de stage",
                    path: "/internships/excelia-internship-agreement-2.pdf",
                    type: "agreement"
                  },
                  {
                    title: "Fiche de mission",
                    path: "/internships/excelia-internship-mission-2.pdf",
                    type: "mission"
                  }
                ],
                projects: [
                  {
                    title: "Automatisation Blender 3D",
                    description: "Développement de scripts Python pour automatiser des tâches répétitives dans Blender 3D, améliorant significativement le workflow de création 3D.",
                    technologies: [
                      { name: "Python", icon: CommandLineIcon },
                      { name: "Blender API", icon: CodeBracketIcon }
                    ],
                    features: [
                      "Automatisation des tâches répétitives",
                      "Optimisation du workflow de modélisation",
                      "Scripts personnalisables selon les besoins",
                      "Interface utilisateur intégrée à Blender"
                    ],
                    image: "/projects/blender-automation.png"
                  },
                  {
                    title: "Optimisation Plans Interactifs",
                    description: "Optimisation des performances et refactorisation du code d'une application web utilisant Babylon.js pour l'affichage de plans interactifs en 3D.",
                    technologies: [
                      { name: "Babylon.js", icon: CubeIcon },
                      { name: "JavaScript", icon: CodeBracketIcon },
                      { name: "HTML5", icon: CodeBracketIcon },
                      { name: "CSS3", icon: SwatchIcon }
                    ],
                    features: [
                      "Amélioration des performances de rendu 3D",
                      "Optimisation du chargement des ressources",
                      "Interface interactive fluide",
                      "Navigation intuitive dans les plans"
                    ],
                    image: "/projects/interactive-plans.png"
                  },
                  {
                    title: "Chatbot Support Étudiant",
                    description: "Développement d'un chatbot intelligent pour le support étudiant, utilisant l'IA pour fournir des réponses précises et personnalisées, réduisant le temps de recherche de 40%.",
                    technologies: [
                      { name: "Python/Flask", icon: CommandLineIcon },
                      { name: "OpenAI GPT-4", icon: CpuChipIcon },
                      { name: "Base de données vectorielle", icon: CircleStackIcon },
                      { name: "Architecture RAG", icon: ServerIcon }
                    ],
                    features: [
                      "Réponses en temps réel aux questions des étudiants",
                      "Base de connaissances vectorielle pour recherche rapide",
                      "Architecture RAG pour une meilleure précision",
                      "Réduction de 40% du temps de recherche",
                      "Interface web responsive"
                    ]
                  }
                ]
              })}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative glass p-8 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 bg-white/5 rounded-full p-2">
                    <Image
                      src="https://play-lh.googleusercontent.com/eLFM1GELLZrKL849EB3b9o-91dJ7wWLJ535-3tz3QE-lzv3XZu26aYAiyxMVxOVG19w"
                      alt="Excelia Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 64px) 100vw, 64px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      Stage Excelia
                    </h3>
                    <p className="text-gray-400 text-sm">Mai 2024 — Juillet 2024</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Stage de fin d'année chez Excelia, focalisé sur l'automatisation des processus, l'optimisation web et le développement d'outils d'assistance intelligents.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies principales :</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                      <CommandLineIcon className="w-4 h-4 text-secondary" />
                      Python
                    </span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                      <CodeBracketIcon className="w-4 h-4 text-secondary" />
                      Flask
                    </span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                      <CpuChipIcon className="w-4 h-4 text-secondary" />
                      OpenAI GPT-4
                    </span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                      <CubeIcon className="w-4 h-4 text-secondary" />
                      Babylon.js
                    </span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                      <CodeBracketIcon className="w-4 h-4 text-secondary" />
                      Blender API
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white text-center">
          Mes Projets
        </h2>
        {/* Projects Section */}
        <div id="projets">
          {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
            <div key={category} className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                  {category}
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categoryProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative group ${project.size} cursor-pointer`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                    <div className="relative glass p-8 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-16 h-16 bg-white/5 rounded-full p-2">
                          <Image
                            src={project.image}
                            alt={`${project.title} Logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 64px) 100vw, 64px"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <project.icon className="w-6 h-6 text-secondary" />
                      <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm">{project.period}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        <tech.icon className="w-4 h-4 text-secondary" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Fonctionnalités :</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-400 mb-3">Compétences liées :</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.relatedTags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Project Skills Matrix Section */}
        <div id="competences" className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
              Matrice des Compétences par Projet
            </h3>
          </motion.div>
          <ProjectSkillsMatrix />
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-hidden"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass p-8 rounded-lg w-full max-w-7xl h-[90vh] flex flex-col overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
                {/* Left column: Project info */}
                <div className="lg:col-span-1 flex flex-col">
                  <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden border-2 border-secondary/30 bg-white p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-contain !p-4"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <selectedProject.icon className="w-5 h-5" />
                    <span>{selectedProject.category}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                          <tech.icon className="w-4 h-4 text-secondary" />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Fonctionnalités :</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-secondary">•</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Compétences liées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.relatedTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right column: Project image */}
                <div className="lg:col-span-2 flex flex-col">
                  <h4 className="text-lg font-semibold mb-4">Aperçu du Projet</h4>
                  {selectedProject.projectImage ? (
                    <div className="relative flex-1 rounded-xl overflow-hidden border-2 border-secondary/30">
                      <div className="absolute inset-0">
                        <Image
                          src={selectedProject.projectImage}
                          alt={`${selectedProject.title} Preview`}
                          fill
                          className="object-contain !p-4"
                          sizes="(max-width: 768px) 100vw, 66vw"
                        />
                      </div>
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
                    <Image
                      src="https://play-lh.googleusercontent.com/eLFM1GELLZrKL849EB3b9o-91dJ7wWLJ535-3tz3QE-lzv3XZu26aYAiyxMVxOVG19w"
                      alt="Excelia Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 64px) 100vw, 64px"
                    />
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
                          <tech.icon className="w-4 h-4 text-secondary" />
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
                          setSelectedInternshipProject(project);
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
                                <tech.icon className="w-3 h-3 text-secondary" />
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
        {selectedInternshipProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[70]"
            onClick={() => setSelectedInternshipProject(null)}
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
                  {selectedInternshipProject.title}
                </h3>
                <button
                  onClick={() => setSelectedInternshipProject(null)}
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
                  <p className="text-gray-300 mb-6">{selectedInternshipProject.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedInternshipProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                          <tech.icon className="w-4 h-4 text-secondary" />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Fonctionnalités :</h4>
                    <ul className="space-y-2">
                      {selectedInternshipProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-secondary">•</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right column: Project image */}
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold mb-4">Aperçu du Projet</h4>
                  {selectedInternshipProject.image ? (
                    <div className="relative flex-1 rounded-xl overflow-hidden border-2 border-secondary/30">
                      <Image
                        src={selectedInternshipProject.image}
                        alt={`${selectedInternshipProject.title} Preview`}
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
      </div>
    </section>
  );
};

export default Projects; 