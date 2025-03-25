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
  CommandLineIcon as TerminalIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Chatbot intelligent avec Fine Tuning OpenAI & Google Cloud API',
    period: 'Mai 2024 - Juillet 2024',
    description: 'Développement d\'un chatbot intelligent bilingue avec fine-tuning pour une meilleure précision',
    technologies: [
      { name: 'Python/Flask', icon: CommandLineIcon },
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'OpenAI API', icon: CpuChipIcon },
      { name: 'Google Cloud', icon: CloudIcon }
    ],
    features: [
      'Interface de chat bilingue (français/anglais)',
      'Panneau d\'administration pour la gestion des documents',
      'Amélioration de la précision grâce à un entraînement IA spécifique',
      'Interface responsive avec précision optimisée'
    ],
    image: '/excelia-logo.png',
    size: 'col-span-2',
    gradient: 'from-blue-500/20 to-purple-500/20',
    icon: ChatBubbleLeftRightIcon
  },
  {
    title: 'Simulation d\'entretien en temps réel (voix)',
    period: 'Janvier 2025 - Mars 2025',
    description: 'Création d\'un outil de simulation d\'entretiens alimenté par IA avec retours personnalisés',
    technologies: [
      { name: 'React JS', icon: CodeBracketIcon },
      { name: 'Next JS', icon: TerminalIcon },
      { name: 'Tailwind CSS', icon: WrenchScrewdriverIcon },
      { name: 'OpenAI API', icon: CpuChipIcon }
    ],
    features: [
      'Simulations d\'entretiens configurables',
      'Tonalité vocale hautement réaliste',
      'Retours personnalisés en temps réel'
    ],
    image: '/excelia-logo.png',
    size: 'col-span-1',
    gradient: 'from-pink-500/20 to-orange-500/20',
    icon: MicrophoneIcon
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
            Projets Professionnels
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez mes projets réalisés lors de mes stages chez Excelia Group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative group ${project.size}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
              <div className="relative glass p-8 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 bg-white/5 rounded-lg p-2">
                    <Image
                      src={project.image}
                      alt="Excelia Logo"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 