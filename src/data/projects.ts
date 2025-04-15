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
  ComputerDesktopIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

// Define interfaces
export interface Technology {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Skill {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  color: string;
}

export interface ProjectSkill {
  name: string;
  description: string;
}

export interface Project {
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
  projectImage?: string;
  isInternship: boolean;
  // Skills-related properties
  skills: ProjectSkill[];
}

// Define skills
export const skills: Skill[] = [
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

// Define projects with skills integrated
export const projects: Project[] = [
  // Projets Pro/Stages
  {
    id: 'automatisation-blender',
    title: 'Automatisation Blender 3D',
    period: '2024',
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
    image: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    size: 'col-span-1',
    gradient: 'from-blue-500/20 to-purple-500/20',
    icon: CubeIcon,
    category: 'Projets Pro',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    isInternship: true,
    skills: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Développement de scripts Python pour automatiser les processus de modélisation 3D, réduisant le temps de production de 40%'
      },
      {
        name: 'Organiser son développement professionnel',
        description: 'Apprentissage approfondi de l\'API Blender et des bonnes pratiques d\'automatisation en environnement 3D'
      }
    ]
  },
  {
    id: 'optimisation-plans',
    title: 'Optimisation Plans Interactifs',
    period: '2024',
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
    image: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    size: 'col-span-1',
    gradient: 'from-purple-500/20 to-pink-500/20',
    icon: CubeIcon,
    category: 'Projets Pro',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    isInternship: true,
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
    ]
  },
  {
    id: 'chatbot-intelligent-openai',
    title: 'Chatbot intelligent avec OpenAI et Google Cloud API',
    period: '2024',
    description: 'Conception d\'un chatbot bilingue avec outils administratifs pour la gestion de documents et l\'affinage du modèle.',
    technologies: [
      { name: 'Python/Flask', icon: CommandLineIcon },
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'OpenAI API', icon: CpuChipIcon },
      { name: 'Google Cloud Storage', icon: CloudIcon }
    ],
    features: [
      'Conception d\'un chatbot bilingue avec outils administratifs',
      'Amélioration de la précision grâce à un entraînement IA spécifique',
      'Interface responsive pour le suivi des performances'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    size: 'col-span-1',
    gradient: 'from-blue-500/20 to-purple-500/20',
    icon: SparklesIcon,
    category: 'Projets Pro',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    isInternship: true,
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
    ]
  },
  {
    id: 'chatbot-fine-tuning',
    title: 'Chatbot intelligent avec Fine Tuning OpenAI',
    period: '2024',
    description: 'Chatbot bilingue avec fine-tuning et gestion avancée des documents via Google Cloud.',
    technologies: [
      { name: 'Python/Flask', icon: CommandLineIcon },
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'OpenAI API', icon: CpuChipIcon },
      { name: 'Google Cloud', icon: CloudIcon }
    ],
    features: [
      'Interface de chat bilingue (FR/EN)',
      'Panneau d\'administration pour la gestion des documents',
      'Fine-tuning GPT-4 et o1-mini',
      'Interface responsive avec précision optimisée'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    size: 'col-span-1',
    gradient: 'from-purple-500/20 to-pink-500/20',
    icon: SparklesIcon,
    category: 'Projets Pro',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    isInternship: true,
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
    ]
  },
  {
    id: 'simulation-entretien-voix',
    title: 'Simulation d\'entretien en temps réel (voix)',
    period: '2024',
    description: 'Outil de simulation d\'entretiens alimenté par IA avec retours personnalisés et tonalité vocale réaliste.',
    technologies: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'Next.js', icon: CommandLineIcon },
      { name: 'Tailwind CSS', icon: WrenchScrewdriverIcon },
      { name: 'OpenAI API', icon: CpuChipIcon }
    ],
    features: [
      'Simulations d\'entretiens configurables',
      'Retours personnalisés par IA',
      'Tonalité vocale hautement réaliste',
      'Interface moderne et responsive'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    size: 'col-span-1',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    icon: MicrophoneIcon,
    category: 'Projets Pro',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    isInternship: true,
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
    ]
  },
  // Add more projects here...
  // For brevity, I'm including 5 projects as examples
];

// Helper function to get project skills as array of strings for the relatedTags property
export const getProjectSkillNames = (projectId: string): string[] => {
  const project = projects.find(p => p.id === projectId);
  return project ? project.skills.map(skill => skill.name) : [];
};

// Helper function to get skills for a specific project
export const getProjectSkills = (projectId: string): ProjectSkill[] => {
  const project = projects.find(p => p.id === projectId);
  return project ? project.skills : [];
};

// Helper function to get all projects with a specific skill
export const getProjectsBySkill = (skillTitle: string): Project[] => {
  return projects.filter(project => 
    project.skills.some(skill => skill.name === skillTitle)
  );
};

// Helper function to get skill color
export const getSkillColor = (skillTitle: string): string => {
  const skill = skills.find(s => s.title === skillTitle);
  return skill ? skill.color : 'from-gray-500 to-gray-700';
};

// Group projects by category
export const getProjectsByCategory = (): Record<string, Project[]> => {
  const projectsByCategory: Record<string, Project[]> = {};
  
  projects.forEach(project => {
    if (!projectsByCategory[project.category]) {
      projectsByCategory[project.category] = [];
    }
    projectsByCategory[project.category].push(project);
  });
  
  return projectsByCategory;
}; 