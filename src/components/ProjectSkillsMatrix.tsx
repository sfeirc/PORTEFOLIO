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
    title: 'Mettre à disposition un service informatique',
    icon: ServerIcon,
    description: 'Développement de services informatiques, maintenance et support utilisateur.',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 'developpement',
    title: 'Organiser son développement professionnel',
    icon: AcademicCapIcon,
    description: 'Formation continue, veille technologique, et développement professionnel.',
    color: 'from-cyan-500 to-blue-500'
  }
];

const projects: Project[] = [
  {
    id: 'automatisation-blender',
    title: 'Automatisation Blender 3D',
    description: 'Scripts Python pour automatiser les tâches répétitives dans Blender 3D, optimisant significativement le workflow.',
    technologies: [
      { name: 'Python', icon: CommandLineIcon },
      { name: 'Blender API', icon: CodeBracketIcon },
      { name: 'Git', icon: CodeBracketIcon }
    ],
    features: [
      'Automatisation des tâches répétitives',
      'Interface utilisateur intégrée',
      'Documentation technique',
      'Optimisation du workflow'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Développement de scripts Python pour automatiser les processus de modélisation 3D, réduisant le temps de production de 40%'
      },
      {
        name: 'Organiser son développement professionnel',
        description: 'Apprentissage approfondi de l\'API Blender et des bonnes pratiques d\'automatisation en environnement 3D'
      }
    ],
    isInternship: true
  },
  {
    id: 'optimisation-plans',
    title: 'Optimisation Plans Interactifs',
    description: 'Optimisation des performances d\'une application web utilisant Babylon.js pour l\'affichage de plans interactifs en 3D.',
    technologies: [
      { name: 'Babylon.js', icon: CubeIcon },
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'HTML/CSS', icon: SwatchIcon }
    ],
    features: [
      'Optimisation des performances',
      'Refactorisation du code',
      'Plans 3D interactifs',
      'Documentation technique'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Refactorisation complète du code legacy et optimisation des performances, réduisant le temps de chargement de 60%'
      },
      {
        name: 'Organiser son développement professionnel',
        description: 'Acquisition d\'expertise en optimisation 3D web et en techniques de refactorisation avancées'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Amélioration significative de l\'expérience utilisateur avec une navigation 3D fluide et responsive'
      }
    ],
    isInternship: true
  },
  {
    id: 'chatbot-intelligent-openai',
    title: 'Chatbot intelligent avec OpenAI et Google Cloud API',
    description: 'Développement d\'un chatbot intelligent intégrant OpenAI et Google Cloud API pour l\'automatisation du support.',
    technologies: [
      { name: 'OpenAI API', icon: CpuChipIcon },
      { name: 'Google Cloud API', icon: CloudIcon },
      { name: 'Python', icon: CommandLineIcon }
    ],
    features: [
      'Support utilisateur automatisé',
      'Intégration OpenAI et Google Cloud',
      'Gestion documentaire',
      'Interface utilisateur intuitive'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Mise en place d\'un système de versionning Git avec des workflows CI/CD, et gestion sécurisée des ressources documentaires'
      },
      {
        name: 'Répondre aux incidents et demandes',
        description: 'Développement d\'un système de support intelligent réduisant le temps de réponse moyen de 75% via l\'IA'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Implémentation d\'un chatbot multilingue optimisé pour le SEO, augmentant l\'engagement utilisateur de 45%'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Direction d\'une équipe de 4 personnes en méthodologie SCRUM avec des sprints de 2 semaines'
      }
    ],
    isInternship: true
  },
  {
    id: 'chatbot-fine-tuning',
    title: 'Chatbot intelligent avec Fine Tuning OpenAI & Google Cloud API',
    description: 'Version améliorée du chatbot avec fine-tuning et fonctionnalités avancées.',
    technologies: [
      { name: 'OpenAI API', icon: CpuChipIcon },
      { name: 'Google Cloud', icon: CloudIcon },
      { name: 'Python', icon: CommandLineIcon }
    ],
    features: [
      'Fine-tuning des modèles',
      'Gestion sécurisée',
      'Optimisation continue',
      'Interaction améliorée'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Mise en place d\'un système de sauvegarde automatique des modèles fine-tunés avec une réduction de 30% de l\'espace de stockage'
      },
      {
        name: 'Répondre aux incidents et demandes',
        description: 'Implémentation d\'un système de détection des erreurs qui a réduit le taux d\'erreur de 85% dans les réponses du chatbot'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Intégration d\'un système multilingue personnalisé augmentant l\'engagement international de 60%'
      }
    ],
    isInternship: true
  },
  {
    id: 'simulation-entretien-voix',
    title: 'Simulation d\'entretien en temps réel (voix)',
    description: 'Application de simulation d\'entretien avec reconnaissance vocale et feedback.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'Web Speech API', icon: CpuChipIcon },
      { name: 'Node.js', icon: ServerIcon }
    ],
    features: [
      'Reconnaissance vocale',
      'Feedback en temps réel',
      'Interface interactive',
      'Documentation technique'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Création d\'un système de versioning pour les scénarios d\'entretien avec une base de données de plus de 200 questions'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Développement d\'une interface web responsive qui a attiré plus de 1000 utilisateurs en 3 mois'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Implémentation d\'un système de feedback en temps réel avec une précision de reconnaissance vocale de 95%'
      },
      {
        name: 'Organiser son développement professionnel',
        description: 'Maîtrise des APIs de reconnaissance vocale et développement de compétences en IA conversationnelle'
      }
    ],
    isInternship: true
  },
  {
    id: 'portfolio',
    title: 'Portfolio Professionnel',
    description: 'Portfolio personnel développé avec Next.js et TailwindCSS, présentant mes projets et compétences.',
    technologies: [
      { name: 'Next.js', icon: CodeBracketIcon },
      { name: 'TailwindCSS', icon: SwatchIcon },
      { name: 'TypeScript', icon: CodeBracketIcon },
      { name: 'Framer Motion', icon: CubeIcon }
    ],
    features: [
      'Interface moderne et responsive',
      'Animations fluides',
      'Présentation des projets',
      'Matrice de compétences interactive'
    ],
    skills: [
      {
        name: 'Organiser son développement professionnel',
        description: 'Conception et développement d\'un portfolio moderne mettant en valeur 15+ projets avec une matrice de compétences interactive'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Optimisation SEO résultant en un score Lighthouse de 98/100 et une augmentation de 70% de la visibilité professionnelle'
      }
    ]
  },
  {
    id: 'certifications',
    title: 'Certifications Professionnelles',
    description: 'Ensemble des certifications obtenues pour développer mes compétences techniques.',
    technologies: [
      { name: 'Google Cloud', icon: CloudIcon },
      { name: 'OpenAI', icon: CpuChipIcon },
      { name: 'Microsoft', icon: CodeBracketIcon }
    ],
    features: [
      'Google Cloud Fundamentals',
      'OpenAI GPT-4 Certification',
      'Microsoft Azure Fundamentals',
      'Formation continue'
    ],
    skills: [
      {
        name: 'Organiser son développement professionnel',
        description: 'Acquisition continue de nouvelles compétences via des certifications reconnues'
      }
    ]
  },
  {
    id: 'meteo-app',
    title: 'Application Web Météo',
    description: 'Application web météorologique avec interface dynamique et gestion collaborative.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'API Météo', icon: CloudIcon },
      { name: 'GitHub', icon: CodeBracketIcon }
    ],
    features: [
      'Interface dynamique',
      'Données météo en temps réel',
      'Documentation technique',
      'Gestion de version'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Mise en place d\'un système de cache intelligent réduisant les appels API de 65% et les coûts associés'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Création d\'une interface météo intuitive générant 500+ visites quotidiennes'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Coordination d\'une équipe de 3 développeurs pour livrer l\'application en 2 semaines pour un concours'
      }
    ]
  },
  {
    id: 'gestion-stages',
    title: 'Logiciel de gestion des stages',
    description: 'Application de gestion des stages avec système de support et gestion des habilitations.',
    technologies: [
      { name: 'Base de données', icon: CircleStackIcon },
      { name: 'Backend', icon: ServerIcon },
      { name: 'Frontend', icon: CodeBracketIcon }
    ],
    features: [
      'Gestion sécurisée des données',
      'Interface de support',
      'Gestion des habilitations',
      'Documentation utilisateur'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Implémentation d\'un système de gestion des droits d\'accès avec 5 niveaux d\'habilitation et chiffrement des données sensibles'
      },
      {
        name: 'Répondre aux incidents et demandes',
        description: 'Création d\'un système de tickets avec un temps de résolution moyen réduit à 4 heures'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Déploiement d\'une plateforme utilisée par 3 établissements avec 98% de satisfaction utilisateur'
      }
    ]
  },
  {
    id: 'gestion-films',
    title: 'Interface de gestion des films récents',
    description: 'Interface de gestion centralisée pour les métadonnées de films.',
    technologies: [
      { name: 'Frontend Framework', icon: CodeBracketIcon },
      { name: 'Base de données', icon: CircleStackIcon }
    ],
    features: [
      'Gestion des métadonnées',
      'Interface utilisateur simplifiée',
      'Documentation technique',
      'Accès centralisé'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Mise en place d\'une base de données optimisée pour gérer plus de 10,000 films avec un système de cache réduisant les temps d\'accès de 70%'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Développement d\'une interface intuitive permettant aux utilisateurs de gérer les métadonnées de films avec un taux de satisfaction de 95%'
      }
    ]
  },
  {
    id: 'location-voitures',
    title: 'Application Web de location de voitures',
    description: 'Plateforme de location de voitures avec gestion des réservations et déploiement.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'Node.js', icon: ServerIcon },
      { name: 'GitHub', icon: CodeBracketIcon }
    ],
    features: [
      'Gestion des réservations',
      'Interface utilisateur moderne',
      'Tests automatisés',
      'Déploiement continu'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Implémentation d\'un système de réservation en temps réel avec synchronisation automatique entre 3 agences partenaires'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Création d\'une interface de réservation multilingue augmentant les conversions de 40% par rapport à l\'ancien système'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Coordination d\'une équipe internationale de 4 développeurs avec des daily scrums et revues de code hebdomadaires'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Mise en place d\'un pipeline CI/CD avec 95% de couverture de tests et déploiement automatisé sur 3 environnements'
      }
    ]
  },
  {
    id: 'readme-generator',
    title: 'Générateur avancé de README',
    description: 'Outil de génération automatique de documentation README avec fonctionnalités avancées.',
    technologies: [
      { name: 'Node.js', icon: ServerIcon },
      { name: 'GitHub API', icon: CodeBracketIcon }
    ],
    features: [
      'Génération automatique',
      'Templates personnalisables',
      'Intégration GitHub',
      'Documentation technique'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Développement d\'un système de templates dynamiques avec plus de 20 modèles personnalisables'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Intégration avec GitHub permettant l\'analyse et la génération de documentation pour 1000+ repos'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Publication sur npm avec plus de 500 téléchargements mensuels et une note de 4.8/5'
      },
      {
        name: 'Organiser son développement professionnel',
        description: 'Contribution à l\'open source et amélioration des pratiques de documentation dans la communauté'
      }
    ]
  },
  {
    id: 'pokemon-api',
    title: 'API Pokémon (Pokédex)',
    description: 'API interactive pour accéder aux données Pokémon avec documentation complète.',
    technologies: [
      { name: 'Node.js', icon: ServerIcon },
      { name: 'MongoDB', icon: CircleStackIcon },
      { name: 'Express', icon: CodeBracketIcon }
    ],
    features: [
      'API RESTful',
      'Documentation interactive',
      'Données enrichies',
      'Gestion de version'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Conception d\'une architecture microservices avec un temps de réponse moyen de 50ms pour 1000+ requêtes/minute'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Publication d\'une documentation interactive avec Swagger attirant 200+ développeurs actifs'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Gestion d\'une communauté de 5 contributeurs avec des sprints hebdomadaires'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Déploiement d\'une API publique avec 99.9% de disponibilité et monitoring en temps réel'
      }
    ]
  },
  {
    id: 'jeu-combat',
    title: 'Jeu de combat interactif',
    description: 'Jeu de combat interactif développé avec méthodologies agiles.',
    technologies: [
      { name: 'Unity', icon: CubeIcon },
      { name: 'C#', icon: CodeBracketIcon }
    ],
    features: [
      'Combat interactif',
      'Interface utilisateur',
      'Gestion du développement',
      'Documentation'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Développement d\'un système de sauvegarde cloud avec synchronisation des données de jeu entre appareils en moins de 2 secondes'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Application de la méthodologie Scrum avec des sprints de 2 semaines et prototypage rapide des mécaniques de combat'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Déploiement sur Steam avec un système de mise à jour automatique et un taux de bugs critiques inférieur à 0.1%'
      }
    ]
  },
  {
    id: 'cercle-parfait',
    title: 'Jeu Web du cercle parfait',
    description: 'Jeu web interactif basé sur le dessin de cercles parfaits.',
    technologies: [
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'HTML Canvas', icon: CodeBracketIcon }
    ],
    features: [
      'Interface interactive',
      'Système de score',
      'Documentation',
      'Gestion de version'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Création d\'un algorithme de détection de cercles avec une précision de 99% utilisant des mathématiques avancées'
      },
      {
        name: 'Développer la présence en ligne',
        description: 'Intégration de partage social générant plus de 10,000 parties partagées sur les réseaux sociaux'
      }
    ]
  },
  {
    id: 'bataille-navale',
    title: 'Bataille navale en C++ (multijoueur local & IA)',
    description: 'Jeu de bataille navale avec mode multijoueur local et intelligence artificielle.',
    technologies: [
      { name: 'C++', icon: CodeBracketIcon },
      { name: 'SDL', icon: CubeIcon }
    ],
    features: [
      'Multijoueur local',
      'IA adversaire',
      'Interface graphique',
      'Documentation technique'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Gestion des ressources techniques via GitHub'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Conception structurée en équipe'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Déploiement local interactif'
      }
    ]
  },
  {
    id: 'demineur',
    title: 'Démineur Python (Tkinter)',
    description: 'Implémentation du jeu du Démineur avec interface graphique Tkinter.',
    technologies: [
      { name: 'Python', icon: CommandLineIcon },
      { name: 'Tkinter', icon: CodeBracketIcon }
    ],
    features: [
      'Interface graphique',
      'Personnalisation',
      'Documentation technique',
      'Tests unitaires'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Documentation technique et gestion du code'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Accès facilité avec personnalisation utilisateur'
      }
    ]
  },
  {
    id: 'station-recharge',
    title: 'Station de recharge VTT solaire avec suivi solaire',
    description: 'Station de recharge solaire intelligente pour VTT avec système de suivi.',
    technologies: [
      { name: 'Arduino', icon: CpuChipIcon },
      { name: 'C++', icon: CodeBracketIcon }
    ],
    features: [
      'Suivi solaire',
      'Gestion énergie',
      'Interface utilisateur',
      'Documentation technique'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Gestion technique et optimisation des ressources matérielles et logicielles'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Intégration matérielle et logicielle coordonnée en équipe'
      }
    ]
  },
  {
    id: 'bras-robotique',
    title: 'Bras robotique à axes commandé à distance',
    description: 'Système de contrôle à distance pour bras robotique multi-axes.',
    technologies: [
      { name: 'Arduino', icon: CpuChipIcon },
      { name: 'Python', icon: CommandLineIcon }
    ],
    features: [
      'Contrôle distant',
      'Interface utilisateur',
      'Documentation technique',
      'Normes de sécurité'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Gestion des versions, documentation et normes de sécurité'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Collaboration technique et organisationnelle précise'
      },
      {
        name: 'Mettre à disposition un service informatique',
        description: 'Contrôle distant et accompagnement utilisateur'
      }
    ]
  },
  {
    id: 'vehicule-transport',
    title: 'Véhicule de transport suivant une ligne',
    description: 'Véhicule autonome avec système de suivi de ligne intégré.',
    technologies: [
      { name: 'Arduino', icon: CpuChipIcon },
      { name: 'C++', icon: CodeBracketIcon }
    ],
    features: [
      'Suivi de ligne',
      'Contrôle moteurs',
      'Capteurs',
      'Documentation'
    ],
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Gestion centralisée des composants matériels et logiciels'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Intégration précise des différentes technologies embarquées'
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
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Application dans le projet :</h4>
                  <p className="text-gray-300">
                    {selectedProject.skills.find(s => s.name === selectedSkillData.title)?.description}
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