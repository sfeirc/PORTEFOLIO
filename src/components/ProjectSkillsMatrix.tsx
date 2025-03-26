'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ComputerDesktopIcon, 
  WrenchScrewdriverIcon, 
  GlobeAltIcon, 
  UserGroupIcon, 
  ServerIcon, 
  AcademicCapIcon,
  XMarkIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

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
  skills: string[];
  skillDetails: {
    [key: string]: string;
  };
}

const skills: Skill[] = [
  {
    id: 'patrimoine',
    title: 'Gérer le patrimoine informatique',
    icon: ComputerDesktopIcon,
    description: 'Gestion et maintenance des systèmes informatiques, optimisation des performances, et administration des bases de données.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'incidents',
    title: 'Répondre aux incidents et demandes',
    icon: WrenchScrewdriverIcon,
    description: 'Support utilisateur, résolution de problèmes, et évolution des systèmes selon les besoins.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'presence',
    title: 'Développer la présence en ligne',
    icon: GlobeAltIcon,
    description: 'Création et maintenance de sites web, optimisation SEO, et gestion de la présence numérique.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'projet',
    title: 'Travailler en mode projet',
    icon: UserGroupIcon,
    description: 'Gestion de projet agile, collaboration d\'équipe, et livraison dans les délais.',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'service',
    title: 'Mettre à disposition un service',
    icon: ServerIcon,
    description: 'Développement de services informatiques, maintenance et support utilisateur.',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 'developpement',
    title: 'Organiser son développement',
    icon: AcademicCapIcon,
    description: 'Formation continue, veille technologique, et développement professionnel.',
    color: 'from-cyan-500 to-blue-500'
  }
];

const projects: Project[] = [
  {
    id: 'chatbot',
    title: 'Chatbot Support Étudiant',
    skills: ['incidents', 'presence', 'service'],
    skillDetails: {
      incidents: 'Développement d\'un système de support automatisé pour répondre aux demandes des étudiants 24/7',
      presence: 'Création d\'une interface de chat moderne et professionnelle pour l\'organisation',
      service: 'Mise en place d\'un service de support étudiant accessible et efficace'
    }
  },
  {
    id: 'meteo',
    title: 'Application Web Météo',
    skills: ['presence', 'projet', 'service'],
    skillDetails: {
      presence: 'Développement d\'une application web responsive avec une interface utilisateur moderne',
      projet: 'Participation à un projet de compétition avec méthodologie agile',
      service: 'Création d\'un service météo accessible et fiable pour les utilisateurs'
    }
  },
  {
    id: 'stages',
    title: 'Logiciel de gestion des stages',
    skills: ['patrimoine', 'service', 'projet'],
    skillDetails: {
      patrimoine: 'Gestion et maintenance d\'une base de données des stages et étudiants',
      service: 'Développement d\'une application complète pour la gestion des stages',
      projet: 'Conception et réalisation d\'un projet de grande envergure'
    }
  },
  {
    id: 'films',
    title: 'Interface de gestion des films',
    skills: ['patrimoine', 'projet'],
    skillDetails: {
      patrimoine: 'Gestion d\'une base de données de films et d\'acteurs',
      projet: 'Développement d\'une application de gestion de contenu'
    }
  },
  {
    id: 'location',
    title: 'Application de location',
    skills: ['service', 'projet'],
    skillDetails: {
      service: 'Création d\'une plateforme de réservation de véhicules',
      projet: 'Développement d\'une application web complète'
    }
  },
  {
    id: 'readme',
    title: 'Générateur de README',
    skills: ['presence', 'projet'],
    skillDetails: {
      presence: 'Création d\'un outil pour améliorer la documentation en ligne',
      projet: 'Développement d\'un outil collaboratif'
    }
  },
  {
    id: 'pokemon',
    title: 'API Pokémon',
    skills: ['service', 'projet'],
    skillDetails: {
      service: 'Développement d\'une API publique pour les données Pokémon',
      projet: 'Création d\'un service de données interactif'
    }
  },
  {
    id: 'entretien',
    title: 'Simulation d\'entretien',
    skills: ['developpement', 'projet'],
    skillDetails: {
      developpement: 'Développement d\'un outil de préparation aux entretiens',
      projet: 'Création d\'une application d\'apprentissage'
    }
  },
  {
    id: 'combat',
    title: 'Jeu de combat',
    skills: ['projet', 'developpement'],
    skillDetails: {
      projet: 'Développement d\'un jeu multiplateforme',
      developpement: 'Création d\'un projet de jeu complet'
    }
  },
  {
    id: 'cercle',
    title: 'Jeu du cercle parfait',
    skills: ['projet', 'developpement'],
    skillDetails: {
      projet: 'Développement d\'un jeu web interactif',
      developpement: 'Création d\'un projet de jeu web'
    }
  },
  {
    id: 'bataille',
    title: 'Bataille navale',
    skills: ['projet', 'developpement'],
    skillDetails: {
      projet: 'Développement d\'un jeu classique',
      developpement: 'Création d\'un projet de jeu en C++'
    }
  },
  {
    id: 'demineur',
    title: 'Démineur Python',
    skills: ['projet', 'developpement'],
    skillDetails: {
      projet: 'Développement d\'un jeu de logique',
      developpement: 'Création d\'un projet de jeu en Python'
    }
  },
  {
    id: 'vtt',
    title: 'Station de recharge VTT',
    skills: ['patrimoine', 'developpement'],
    skillDetails: {
      patrimoine: 'Développement d\'un système de gestion d\'énergie',
      developpement: 'Création d\'un projet IoT'
    }
  },
  {
    id: 'robot',
    title: 'Bras robotique',
    skills: ['patrimoine', 'developpement'],
    skillDetails: {
      patrimoine: 'Développement d\'un système de contrôle robotique',
      developpement: 'Création d\'un projet de robotique'
    }
  },
  {
    id: 'transport',
    title: 'Véhicule de transport',
    skills: ['patrimoine', 'developpement'],
    skillDetails: {
      patrimoine: 'Développement d\'un système de navigation autonome',
      developpement: 'Création d\'un projet d\'automatisation'
    }
  }
];

const ProjectSkillsMatrix: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectSkill, setSelectedProjectSkill] = useState<string | null>(null);

  const selectedSkillData = selectedProjectSkill ? skills.find((s: Skill) => s.id === selectedProjectSkill) : null;

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
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-[200px_repeat(6,1fr)] gap-4 mb-4"
            >
              <div className="glass p-3 rounded-lg border border-white/10">
                <span className="text-sm font-medium">{project.title}</span>
              </div>
              {skills.map((skill) => {
                const hasSkill = project.skills.includes(skill.id);
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
                  {projects
                    .filter(project => project.skills.includes(selectedSkill.id))
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
        {selectedProject && selectedProjectSkill && selectedSkillData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => {
              setSelectedProject(null);
              setSelectedProjectSkill(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative glass p-8 rounded-lg max-w-2xl w-full mx-4 border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setSelectedProjectSkill(null);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedSkillData.color} flex items-center justify-center`}>
                  <selectedSkillData.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400">
                    {selectedSkillData.title}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Description de la compétence :</h4>
                  <p className="text-gray-300">
                    {selectedSkillData.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Application dans le projet :</h4>
                  <p className="text-gray-300">
                    {selectedProject.skillDetails[selectedProjectSkill]}
                  </p>
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