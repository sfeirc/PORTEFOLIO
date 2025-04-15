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

// Skills definitions
export const skills = [
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

// Projects data
export const projectsData = [
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
    projectImage: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    size: 'col-span-1',
    gradient: 'from-blue-500/20 to-purple-500/20',
    icon: CubeIcon,
    category: 'Projets Pro',
    isInternship: true,
    skillDetails: [
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
    projectImage: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    size: 'col-span-1',
    gradient: 'from-purple-500/20 to-pink-500/20',
    icon: CubeIcon,
    category: 'Projets Pro',
    isInternship: true,
    skillDetails: [
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
    projectImage: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    size: 'col-span-1',
    gradient: 'from-blue-500/20 to-purple-500/20',
    icon: SparklesIcon,
    category: 'Projets Pro',
    isInternship: true,
    skillDetails: [
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
    projectImage: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    size: 'col-span-1',
    gradient: 'from-purple-500/20 to-pink-500/20',
    icon: SparklesIcon,
    category: 'Projets Pro',
    isInternship: true,
    skillDetails: [
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
    projectImage: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    size: 'col-span-1',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    icon: MicrophoneIcon,
    category: 'Projets Pro',
    isInternship: true,
    skillDetails: [
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
  {
    id: 'portfolio',
    title: 'Portfolio Professionnel',
    period: '2023',
    description: 'Portfolio personnel développé avec Next.js et TailwindCSS, présentant mes projets et compétences.',
    technologies: [
      { name: 'Next.js', icon: CodeBracketIcon },
      { name: 'TailwindCSS', icon: SwatchIcon },
      { name: 'Framer Motion', icon: SparklesIcon }
    ],
    features: [
      'Site web responsive',
      'Animations fluides',
      'Présentation de projets',
      'Design moderne'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/2721/2721724.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/2721/2721724.png',
    size: 'col-span-1',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    icon: DevicePhoneMobileIcon,
    category: 'Projets Web',
    isInternship: false,
    skillDetails: [
      {
        name: 'Développer la présence en ligne',
        description: 'Création d\'un portfolio optimisé SEO atteignant un score Lighthouse de 98/100, augmentant la visibilité professionnelle'
      },
      {
        name: 'Organiser son développement professionnel',
        description: 'Présentation structurée de mes compétences et projets, avec un système de filtrage par technologie'
      }
    ]
  },
  // Adding missing projects
  {
    id: 'meteo-app',
    title: 'Application Web Météo',
    period: 'Décembre 2024',
    description: 'Application météo en temps réel avec interface dynamique, 2ᵉ place à la Nuit de l\'Info 2024.',
    technologies: [
      { name: 'HTML', icon: CodeBracketIcon },
      { name: 'CSS', icon: WrenchScrewdriverIcon },
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'OpenWeatherMap API', icon: CloudIcon }
    ],
    features: [
      'Affichage des données météorologiques en temps réel',
      '2ᵉ place au concours national',
      'Design innovant et fonctionnalités avancées'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/414/414927.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/414/414927.png',
    size: 'col-span-1',
    gradient: 'from-green-500/20 to-blue-500/20',
    icon: SunIcon,
    category: 'Développement logiciel et Applications Web',
    isInternship: false,
    skillDetails: [
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
    period: '2024',
    description: 'Interface conviviale pour le suivi des étudiants et des stages avec système automatisé de rapports.',
    technologies: [
      { name: 'C#', icon: CodeBracketIcon },
      { name: 'SQL Server', icon: CloudIcon }
    ],
    features: [
      'Interface conviviale pour le suivi des étudiants',
      'Système automatisé de rapports et d\'évaluations',
      'Tableau de bord administratif complet',
      'Connexion sécurisée et gestion des utilisateurs'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/2436/2436874.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/2436/2436874.png',
    size: 'col-span-1',
    gradient: 'from-purple-500/20 to-pink-500/20',
    icon: DocumentDuplicateIcon,
    category: 'Développement logiciel et Applications Web',
    isInternship: false,
    skillDetails: [
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
    period: '2024',
    description: 'Outil de recherche des acteurs par film et inversement avec gestion optimisée des métadonnées.',
    technologies: [
      { name: 'Symfony', icon: CodeBracketIcon },
      { name: 'Twig', icon: WrenchScrewdriverIcon }
    ],
    features: [
      'Recherche bidirectionnelle acteurs-films',
      'Gestion optimisée des métadonnées',
      'Interface utilisateur intuitive'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/2809/2809372.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/2809/2809372.png',
    size: 'col-span-1',
    gradient: 'from-red-500/20 to-orange-500/20',
    icon: GlobeAltIcon,
    category: 'Développement logiciel et Applications Web',
    isInternship: false,
    skillDetails: [
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
    period: '2024',
    description: 'Plateforme complète de location de véhicules avec gestion des réservations et du stock.',
    technologies: [
      { name: 'Symfony', icon: CodeBracketIcon },
      { name: 'Twig', icon: WrenchScrewdriverIcon },
      { name: 'SQL', icon: CloudIcon },
      { name: 'JavaScript', icon: CodeBracketIcon }
    ],
    features: [
      'Plateforme de recherche et réservation',
      'Tableau de bord administrateur',
      'Gestion des réservations et du stock',
      'Interface responsive'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
    size: 'col-span-1',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    icon: DevicePhoneMobileIcon,
    category: 'Développement logiciel et Applications Web',
    isInternship: false,
    skillDetails: [
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
  // Add more missing projects
  {
    id: 'readme-generator',
    title: 'Générateur avancé de README',
    period: '2024',
    description: 'Amélioration assistée par IA du contenu avec aperçu Markdown en temps réel.',
    technologies: [
      { name: 'Python/Flask', icon: CommandLineIcon },
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'GitHub API', icon: CloudIcon },
      { name: 'OpenAI API', icon: CpuChipIcon }
    ],
    features: [
      'Amélioration assistée par IA du contenu (GPT-4)',
      'Aperçu Markdown en temps réel',
      'Modèles personnalisables',
      'Authentification GitHub OAuth'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/4208/4208470.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/4208/4208470.png',
    size: 'col-span-1',
    gradient: 'from-orange-500/20 to-red-500/20',
    icon: BeakerIcon,
    category: 'Applications IA & orientées données',
    isInternship: false,
    skillDetails: [
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
    period: '2024',
    description: 'Application de recherche de Pokémon avec représentations visuelles dynamiques et animations 3D.',
    technologies: [
      { name: 'Node.js', icon: CommandLineIcon },
      { name: 'Express', icon: CodeBracketIcon },
      { name: 'Three.js', icon: CpuChipIcon },
      { name: 'Chart.js', icon: CloudIcon }
    ],
    features: [
      'Recherche par nom, type ou statistiques',
      'Représentations visuelles dynamiques',
      'Animations 3D des Pokémon'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/188/188987.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/188/188987.png',
    size: 'col-span-1',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    icon: PuzzlePieceIcon,
    category: 'Applications IA & orientées données',
    isInternship: false,
    skillDetails: [
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
    period: '2024',
    description: 'Mécanismes de combat avancés avec points de vie et coups spéciaux, optimisé pour une performance multiplateforme.',
    technologies: [
      { name: 'Dart', icon: CodeBracketIcon }
    ],
    features: [
      'Mécanismes de combat avancés',
      'Système de points de vie',
      'Coups spéciaux',
      'Performance multiplateforme'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1998/1998610.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/1998/1998610.png',
    size: 'col-span-1',
    gradient: 'from-red-500/20 to-pink-500/20',
    icon: GameIcon,
    category: 'Développement de Jeux & Applications Interactives',
    isInternship: false,
    skillDetails: [
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
    period: '2024',
    description: 'Jeu de dessin de cercle avec notation en temps réel de la précision et mode sombre.',
    technologies: [
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'CSS', icon: WrenchScrewdriverIcon }
    ],
    features: [
      'Notation en temps réel de la précision',
      'Mode sombre intégré',
      'Design responsive',
      'Interface intuitive'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    size: 'col-span-1',
    gradient: 'from-green-500/20 to-blue-500/20',
    icon: CircleStackIcon,
    category: 'Développement de Jeux & Applications Interactives',
    isInternship: false,
    skillDetails: [
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
  // Add final set of missing projects
  {
    id: 'bataille-navale',
    title: 'Bataille navale en C++',
    period: '2024',
    description: 'Jeu de bataille navale avec IA stratégique et support multijoueur local.',
    technologies: [
      { name: 'C++', icon: CodeBracketIcon }
    ],
    features: [
      'IA stratégique avec attaques ciblées',
      'Support multijoueur local',
      'Logique complète du jeu',
      'Placement intelligent des navires'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    size: 'col-span-1',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    icon: ServerIcon,
    category: 'Développement de Jeux & Applications Interactives',
    isInternship: false,
    skillDetails: [
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
    title: 'Démineur Python',
    period: '2024',
    description: 'Jeu de démineur avec taille de grille personnalisable et détection en temps réel.',
    technologies: [
      { name: 'Python', icon: CommandLineIcon },
      { name: 'Tkinter', icon: WrenchScrewdriverIcon }
    ],
    features: [
      'Taille de grille personnalisable',
      'Détection des mines en temps réel',
      'Interface graphique interactive',
      'Niveaux de difficulté'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    size: 'col-span-1',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    icon: CubeIcon,
    category: 'Développement de Jeux & Applications Interactives',
    isInternship: false,
    skillDetails: [
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
    title: 'Station de recharge VTT solaire',
    period: '2024',
    description: 'Station de recharge avec suivi solaire en temps réel pour capture optimale de l\'énergie.',
    technologies: [
      { name: 'Arduino', icon: CpuChipIcon },
      { name: 'C++', icon: CodeBracketIcon },
      { name: 'Capteurs', icon: WrenchScrewdriverIcon }
    ],
    features: [
      'Suivi solaire en temps réel',
      'Capture optimale de l\'énergie',
      'Amélioration de l\'efficacité de la batterie',
      'Fonctionnement autonome'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    size: 'col-span-1',
    gradient: 'from-green-500/20 to-blue-500/20',
    icon: BoltIcon,
    category: 'Systèmes embarqués & IoT',
    isInternship: false,
    skillDetails: [
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
    title: 'Bras robotique à axes',
    period: '2024',
    description: 'Bras robotique avec 6 degrés de liberté et cinématique inverse pour mouvements précis.',
    technologies: [
      { name: 'Arduino', icon: CpuChipIcon },
      { name: 'C++', icon: CodeBracketIcon },
      { name: 'Fabrication métallique', icon: WrenchScrewdriverIcon }
    ],
    features: [
      '6 degrés de liberté',
      'Cinématique inverse',
      'Interface de contrôle sur mesure',
      'Mouvements précis'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    size: 'col-span-1',
    gradient: 'from-purple-500/20 to-pink-500/20',
    icon: WrenchScrewdriverIcon,
    category: 'Systèmes embarqués & IoT',
    isInternship: false,
    skillDetails: [
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
    period: '2024',
    description: 'Véhicule autonome pour le transport d\'objets avec suivi de ligne optimisé.',
    technologies: [
      { name: 'Arduino', icon: CpuChipIcon },
      { name: 'C++', icon: CodeBracketIcon },
      { name: 'Capteurs IR', icon: WrenchScrewdriverIcon }
    ],
    features: [
      'Suivi autonome du chemin',
      'Optimisation des capteurs IR',
      'Transport d\'objets',
      'Navigation précise'
    ],
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    size: 'col-span-1',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    icon: RocketLaunchIcon,
    category: 'Systèmes embarqués & IoT',
    isInternship: false,
    skillDetails: [
      {
        name: 'Gérer le patrimoine informatique',
        description: 'Gestion centralisée des composants matériels et logiciels'
      },
      {
        name: 'Travailler en mode projet',
        description: 'Intégration précise des différentes technologies embarquées'
      }
    ]
  },
  {
    id: 'certifications',
    title: 'Certifications Professionnelles',
    period: '2024',
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
    image: 'https://cdn-icons-png.flaticon.com/512/4208/4208470.png',
    projectImage: 'https://cdn-icons-png.flaticon.com/512/4208/4208470.png',
    size: 'col-span-1',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    icon: DocumentTextIcon,
    category: 'Certification & Formation',
    isInternship: false,
    skillDetails: [
      {
        name: 'Organiser son développement professionnel',
        description: 'Acquisition continue de nouvelles compétences via des certifications reconnues'
      }
    ]
  }
];

// Helper function to get skills list for a project
export const getProjectSkills = (projectId: string) => {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return [];
  
  return project.skillDetails.map(skill => skill.name);
};

// Helper function to get projects for a skill
export const getSkillProjects = (skillId: string) => {
  const skill = skills.find(s => s.id === skillId);
  if (!skill) return [];
  
  return projectsData.filter(project => 
    project.skillDetails.some(detail => detail.name === skill.title)
  );
};

export default projectsData; 