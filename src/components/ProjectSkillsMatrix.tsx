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
  ArrowPathIcon,
  CodeBracketIcon, 
  CommandLineIcon, 
  CpuChipIcon, 
  CloudIcon, 
  CubeIcon,
  CircleStackIcon,
  SwatchIcon
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
  description: string;
  technologies: { name: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[];
  features: string[];
  skills: { name: string; description: string }[];
  isInternship?: boolean;
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
  // Internship Projects
  {
    id: 'automatisation-blender-3d',
    title: 'Automatisation Blender 3D',
    description: 'Développement de scripts Python pour automatiser des tâches répétitives dans Blender 3D, améliorant significativement le workflow de création 3D.',
    technologies: [
      { name: 'Python', icon: CommandLineIcon },
      { name: 'Blender API', icon: CodeBracketIcon }
    ],
    features: [
      'Automatisation des tâches répétitives',
      'Optimisation du workflow de modélisation',
      'Scripts personnalisables selon les besoins',
      'Interface utilisateur intégrée à Blender'
    ],
    skills: [
      {
        name: 'Travailler en mode projet',
        description: 'Développement de solutions d\'automatisation pour améliorer la productivité'
      },
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Optimisation des processus de création 3D et gestion des ressources'
      }
    ],
    isInternship: true
  },
  {
    id: 'optimisation-plans-interactifs',
    title: 'Optimisation Plans Interactifs',
    description: 'Optimisation des performances et refactorisation du code d\'une application web utilisant Babylon.js pour l\'affichage de plans interactifs en 3D.',
    technologies: [
      { name: 'Babylon.js', icon: CubeIcon },
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'HTML5', icon: CodeBracketIcon },
      { name: 'CSS3', icon: SwatchIcon }
    ],
    features: [
      'Amélioration des performances de rendu 3D',
      'Optimisation du chargement des ressources',
      'Interface interactive fluide',
      'Navigation intuitive dans les plans'
    ],
    skills: [
      {
        name: 'Travailler en mode projet',
        description: 'Optimisation et refactorisation de code existant'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Amélioration des performances et de l\'expérience utilisateur'
      }
    ],
    isInternship: true
  },
  {
    id: 'chatbot-support-etudiant',
    title: 'Chatbot Support Étudiant',
    description: 'Développement d\'un chatbot intelligent pour le support étudiant, utilisant l\'IA pour fournir des réponses précises et personnalisées, réduisant le temps de recherche de 40%.',
    technologies: [
      { name: 'Python/Flask', icon: CommandLineIcon },
      { name: 'OpenAI GPT-4', icon: CpuChipIcon },
      { name: 'Base de données vectorielle', icon: CircleStackIcon },
      { name: 'Architecture RAG', icon: ServerIcon }
    ],
    features: [
      'Réponses en temps réel aux questions des étudiants',
      'Base de connaissances vectorielle pour recherche rapide',
      'Architecture RAG pour une meilleure précision',
      'Réduction de 40% du temps de recherche',
      'Interface web responsive'
    ],
    skills: [
      {
        name: 'Travailler en mode projet',
        description: 'Développement d\'une solution d\'IA pour le support étudiant'
      },
      {
        name: 'Répondre aux incidents',
        description: 'Automatisation des réponses aux questions fréquentes'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Amélioration de l\'expérience utilisateur via IA'
      }
    ],
    isInternship: true
  },
  {
    id: 'chatbot-intelligent-with-openai',
    title: 'Chatbot intelligent avec OpenAI',
    description: 'Développement d\'un chatbot bilingue avec fonctionnalités administratives avancées pour gérer des documents et affiner les modèles IA.',
    technologies: [
      { name: 'Python/Flask', icon: CommandLineIcon },
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'OpenAI API', icon: CpuChipIcon },
      { name: 'Google Cloud Storage', icon: CloudIcon }
    ],
    features: [
      'Interface de chat bilingue (FR/EN)',
      'Panneau d\'administration pour la gestion des documents',
      'Fine-tuning GPT-4 et o1-mini',
      'Interface responsive avec précision optimisée'
    ],
    skills: [
      {
        name: 'Travailler en mode projet',
        description: 'Projet collaboratif impliquant plusieurs technologies'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Améliore l\'interaction et l\'expérience utilisateur'
      },
      {
        name: 'Répondre aux incidents',
        description: 'Automatisation du support client via chatbot'
      }
    ],
    isInternship: true
  },
  {
    id: 'simulation-entretien',
    title: 'Simulation entretien en temps réel',
    description: 'Application de simulation d\'entretiens avec feedback personnalisé pour améliorer les compétences professionnelles.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'Node.js', icon: ServerIcon },
      { name: 'OpenAI API', icon: CpuChipIcon }
    ],
    features: [
      'Simulation vocale réaliste',
      'Feedback personnalisé',
      'Interface moderne',
      'Design responsive'
    ],
    skills: [
      {
        name: 'Organiser son développement professionnel',
        description: 'Amélioration des compétences professionnelles'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Simulations personnalisées accessibles'
      }
    ],
    isInternship: true
  },
  // Regular Projects
  {
    id: 'meteo',
    title: 'Application Web Météo',
    description: 'Développement d\'une application web responsive avec une interface utilisateur moderne pour afficher les informations météorologiques.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'API Météo', icon: CloudIcon }
    ],
    features: [
      'Interface utilisateur moderne et responsive',
      'Affichage en temps réel des données météo',
      'Prévisions météorologiques',
      'Design adaptatif'
    ],
    skills: [
      {
        name: 'Travailler en mode projet',
        description: 'Réalisation rapide en équipe pour un concours'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Visibilité augmentée par une interface innovante'
      }
    ]
  },
  {
    id: 'stages',
    title: 'Logiciel de gestion des stages',
    description: 'Développement d\'une application complète pour la gestion des stages, incluant la sécurisation et la gestion centralisée des données.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'Node.js', icon: ServerIcon },
      { name: 'MongoDB', icon: CircleStackIcon }
    ],
    features: [
      'Gestion centralisée des stages',
      'Interface utilisateur intuitive',
      'Système de notifications',
      'Tableau de bord administrateur'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Sécurisation et gestion centralisée des données'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Outil pratique pour utilisateurs'
      },
      {
        name: 'Répondre aux incidents',
        description: 'Assistance intégrée aux utilisateurs'
      }
    ]
  },
  {
    id: 'films',
    title: 'Interface gestion films récents',
    description: 'Application de gestion de contenu cinématographique avec accès facilité aux données et gestion efficace des informations structurées.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'Node.js', icon: ServerIcon },
      { name: 'PostgreSQL', icon: CircleStackIcon }
    ],
    features: [
      'Base de données de films',
      'Interface de recherche avancée',
      'Gestion des favoris',
      'Système de notation'
    ],
    skills: [
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Accès facilité à des données cinématographiques'
      },
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Gestion efficace des données structurées'
      }
    ]
  },
  {
    id: 'location',
    title: 'Application Web de location voitures',
    description: 'Plateforme de réservation de véhicules avec une interface simple et intuitive, optimisée pour la gestion des réservations.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'Node.js', icon: ServerIcon },
      { name: 'MongoDB', icon: CircleStackIcon }
    ],
    features: [
      'Système de réservation en ligne',
      'Gestion des disponibilités',
      'Paiement sécurisé',
      'Interface utilisateur intuitive'
    ],
    skills: [
      {
        name: 'Travailler en mode projet',
        description: 'Division du développement (front/back-end)'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Plateforme simple et intuitive'
      },
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Gestion optimale des réservations'
      }
    ]
  },
  {
    id: 'readme',
    title: 'Générateur avancé de README',
    description: 'Outil pour simplifier la création de documentation technique avec une interface utilisateur intuitive.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'Node.js', icon: ServerIcon }
    ],
    features: [
      'Génération automatique de README',
      'Templates personnalisables',
      'Prévisualisation en temps réel',
      'Export en Markdown'
    ],
    skills: [
      {
        name: 'Organiser son développement professionnel',
        description: 'Simplification de documentation technique'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Facilité d\'utilisation'
      }
    ]
  },
  {
    id: 'pokemon',
    title: 'API Pokémon (Pokédex)',
    description: 'API publique pour les données Pokémon avec visualisation interactive des informations.',
    technologies: [
      { name: 'Node.js', icon: ServerIcon },
      { name: 'Express', icon: CodeBracketIcon },
      { name: 'MongoDB', icon: CircleStackIcon }
    ],
    features: [
      'API RESTful',
      'Documentation Swagger',
      'Visualisation des données',
      'Recherche avancée'
    ],
    skills: [
      {
        name: 'Travailler en mode projet',
        description: 'Approche agile et collaborative'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Visualisation interactive des données'
      }
    ]
  },
  {
    id: 'combat',
    title: 'Jeu de combat interactif',
    description: 'Jeu de combat multiplateforme avec des fonctionnalités ludiques développées en équipe.',
    technologies: [
      { name: 'Unity', icon: CubeIcon },
      { name: 'C#', icon: CodeBracketIcon }
    ],
    features: [
      'Mode multijoueur',
      'Système de combat',
      'Animations fluides',
      'Interface utilisateur intuitive'
    ],
    skills: [
      {
        name: 'Travailler en mode projet',
        description: 'Développement en équipe de fonctionnalités ludiques'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Jeu interactif multiplateforme'
      }
    ]
  },
  {
    id: 'cercle',
    title: 'Jeu Web du cercle parfait',
    description: 'Jeu web interactif innovant attirant des utilisateurs avec un concept unique.',
    technologies: [
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'HTML5 Canvas', icon: CodeBracketIcon }
    ],
    features: [
      'Interface intuitive',
      'Système de score',
      'Animations fluides',
      'Design responsive'
    ],
    skills: [
      {
        name: 'Développer la présence en ligne',
        description: 'Contenu interactif innovant attirant des utilisateurs'
      }
    ]
  },
  {
    id: 'bataille',
    title: 'Bataille navale C++ (IA)',
    description: 'Jeu de bataille navale avec intégration d\'IA avancée pour une expérience de jeu enrichie.',
    technologies: [
      { name: 'C++', icon: CodeBracketIcon },
      { name: 'OpenGL', icon: CubeIcon }
    ],
    features: [
      'IA avancée',
      'Interface graphique',
      'Mode multijoueur',
      'Système de difficulté'
    ],
    skills: [
      {
        name: 'Travailler en mode projet',
        description: 'Intégration de stratégies et IA avancée'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Jeu local accessible aux utilisateurs'
      }
    ]
  },
  {
    id: 'demineur',
    title: 'Démineur Python (Tkinter)',
    description: 'Jeu de démineur avec interface graphique développée avec Tkinter.',
    technologies: [
      { name: 'Python', icon: CommandLineIcon },
      { name: 'Tkinter', icon: CodeBracketIcon }
    ],
    features: [
      'Interface graphique',
      'Différents niveaux de difficulté',
      'Système de score',
      'Design classique'
    ],
    skills: [
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Jeu interactif facile à utiliser et configurable'
      }
    ]
  },
  {
    id: 'vtt',
    title: 'Station recharge VTT solaire',
    description: 'Système de gestion d\'énergie autonome pour station de recharge VTT.',
    technologies: [
      { name: 'Arduino', icon: CpuChipIcon },
      { name: 'C++', icon: CodeBracketIcon }
    ],
    features: [
      'Gestion énergétique',
      'Monitoring en temps réel',
      'Interface utilisateur',
      'Système de sécurité'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Gestion énergétique autonome et optimisée'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Intégration matérielle et logicielle pour efficacité énergétique'
      }
    ]
  },
  {
    id: 'robot',
    title: 'Bras robotique commandé à distance',
    description: 'Système de contrôle robotique avec commande à distance précise.',
    technologies: [
      { name: 'Arduino', icon: CpuChipIcon },
      { name: 'C++', icon: CodeBracketIcon }
    ],
    features: [
      'Contrôle à distance',
      'Interface utilisateur',
      'Calibration',
      'Système de sécurité'
    ],
    skills: [
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Contrôle distant précis'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Développement combiné de mécanique et électronique'
      }
    ]
  },
  {
    id: 'transport',
    title: 'Véhicule transport ligne Arduino',
    description: 'Système de navigation autonome pour véhicule de transport sur ligne.',
    technologies: [
      { name: 'Arduino', icon: CpuChipIcon },
      { name: 'C++', icon: CodeBracketIcon }
    ],
    features: [
      'Navigation autonome',
      'Détection d\'obstacles',
      'Interface de contrôle',
      'Système de sécurité'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Optimisation logicielle et matérielle du véhicule'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Utilisation de multiples technologies pour atteindre les objectifs du projet'
      }
    ]
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
                const hasSkill = project.skills.some((s) => s.name === skill.title);
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
                    .filter(project => project.skills.some((s) => s.name === selectedSkill.title))
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
                    {selectedProject.skills.find(s => s.name === selectedSkillData.title)?.description}
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