import portfolioData from './portfolioData.json';
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
  ShieldCheckIcon as ShieldCheckIcon
} from '@heroicons/react/24/outline';

// Icon mapping to convert string names in JSON to actual icon components
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
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
  GameIcon,
  LightBulbIcon,
  ArrowTopRightOnSquareIcon,
  WindowIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  // Add aliases for specific uses
  DockerIcon: CommandLineIcon,
  GitIcon: CommandLineIcon,
  ApiIcon: CommandLineIcon,
  AiIcon: CpuChipIcon,
  ProgrammingIcon: CodeBracketIcon
};

/**
 * Helper function to resolve image paths
 * @param path - Image path from the JSON
 * @returns - Resolved image URL
 */
export const getImageUrl = (path: string): string => {
  // If the path is already a URL (starts with http or https), return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Get the base path for GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/PORTEFOLIO' : '';
  
  // If the path starts with a slash, it's a public path
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  
  // Otherwise, assume it's a relative path to the images folder
  return `${basePath}/images/${path}`;
};

/**
 * Helper function to get PDF viewer URL that works on GitHub Pages
 * @param path - PDF path from the JSON
 * @returns - Embeddable PDF viewer URL
 */
export const getPdfViewerUrl = (path: string): string => {
  // If the path is a Google Drive link, convert it to an embedded viewer URL
  if (path.includes('drive.google.com')) {
    // Extract the file ID from the URL
    const fileIdMatch = path.match(/\/d\/(.*?)(\/|$)/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return path.replace('/view', '/preview');
  }
  
  // If the path is already a full URL
  if (path.startsWith('http://') || path.startsWith('https://')) {
    // For PDF hosting services
    if (path.includes('pdf.io') || path.includes('docdroid.net') || path.includes('scribd.com')) {
      return path;
    }
    
    // For other URLs, use Google Doc Viewer
    return `https://docs.google.com/viewer?url=${encodeURIComponent(path)}&embedded=true`;
  }
  
  // For placeholder or empty URLs
  if (!path || path === "") {
    return "https://via.placeholder.com/800x600?text=PDF+Not+Available";
  }

  // Use the PDF mappings from the JSON file
  const pdfMappings = (portfolioData as any).pdfMappings;
  
  // Check in certifications
  if (path.startsWith('/certifications/') && pdfMappings.certifications[path]) {
    return getPdfViewerUrl(pdfMappings.certifications[path]); // Recursively process the mapped URL
  }
  
  // Check in internships
  if (path.startsWith('/internships/') && pdfMappings.internships[path]) {
    return getPdfViewerUrl(pdfMappings.internships[path]); // Recursively process the mapped URL
  }
  
  return "https://via.placeholder.com/800x600?text=PDF+Not+Available";
};

// Type definitions that mirror the JSON structure
export interface NavbarItem {
  name: string;
  href: string;
}

export interface Navbar {
  title: string;
  items: NavbarItem[];
}

export interface Technology {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface SkillDetail {
  name: string;
  description: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  technologies: Technology[];
  features: string[];
  image: string;
  projectImage?: string;
  projectImages?: ProjectImage[];
  size: string;
  gradient: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  category: string;
  isInternship: boolean;
  skillDetails: SkillDetail[];
}

export interface Skill {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  color: string;
}

export interface Education {
  title: string;
  subtitle: string;
  school: string;
  period: string;
  description: string;
  image: string;
  skills: {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
  documentImage: string;
  description: string;
}

export interface About {
  name: string;
  title: string;
  subtitle?: string;
  profileImage: string;
  tagline?: string;
  cta?: {
    text: string;
    link: string;
  };
  description?: string | string[];
  resumeLink?: string;
}

export interface TechnicalSkills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[];
}

export interface InternshipDocument {
  title: string;
  path: string;
  type: 'agreement' | 'mission';
}

export interface InternshipProject {
  title: string;
  description: string;
  technologies: Technology[];
  features: string[];
  image?: string;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  period: string;
  description: string;
  technologies: Technology[];
  documents: InternshipDocument[];
  projects: InternshipProject[];
}

// Type for raw data from JSON
interface RawSkill {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
}



interface RawEducation {
  title: string;
  subtitle: string;
  school: string;
  period: string;
  description: string;
  image: string;
  skills: { name: string; icon: string }[];
  keyPoints?: string[];
}

interface RawCertification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  icon: string;
  image: string;
  documentImage: string;
  description: string;
}

interface RawTechnology {
  name: string;
  icon: string;
}

interface RawProject {
  id: string;
  title: string;
  period: string;
  description: string;
  technologies: RawTechnology[];
  features: string[];
  image: string;
  projectImage?: string;
  projectImages?: ProjectImage[];
  size: string;
  gradient: string;
  icon: string;
  category: string;
  isInternship: boolean;
  skillDetails: SkillDetail[];
}

// Helper functions for data manipulation
export const usePortfolioData = () => {
  // Transform raw data into typed data
  const {
    navbar,
    skills: rawSkills,

    education: rawEducation,
    certifications: rawCertifications,
    projects: rawProjects,
    about: rawAbout,
    technicalSkills: rawTechnicalSkills,
    internships: rawInternships
  } = portfolioData;

  // Process skills - adding icon components
  const processedSkills = (rawSkills as RawSkill[]).map((skill) => ({
    ...skill,
    icon: iconMap[skill.icon] || DocumentTextIcon
  }));



  // Process education with icon components
  const processedEducation = (rawEducation as RawEducation[]).map((education) => ({
    ...education,
    skills: education.skills.map((skill) => ({
      ...skill,
      icon: iconMap[skill.icon] || DocumentTextIcon
    }))
  }));

  // Process certifications with icon components
  const processedCertifications = (rawCertifications as RawCertification[]).map((cert) => ({
    ...cert,
    icon: iconMap[cert.icon] || DocumentTextIcon
  }));

  // Process technical skills with icon components
  const processedTechnicalSkills: TechnicalSkills = {
    languages: rawTechnicalSkills.languages,
    frameworks: rawTechnicalSkills.frameworks,
    databases: rawTechnicalSkills.databases,
    tools: rawTechnicalSkills.tools.map((tool) => ({
      ...tool,
      icon: iconMap[tool.icon] || DocumentTextIcon
    }))
  };

  // Process projects with icon components
  const processedProjects = (rawProjects as RawProject[]).map((project) => ({
    ...project,
    icon: iconMap[project.icon] || DocumentTextIcon,
    technologies: project.technologies.map((tech) => ({
      ...tech,
      icon: iconMap[tech.icon] || DocumentTextIcon
    }))
  }));

  // Transform internships data
  const internships: Internship[] = (rawInternships || []).map((internship: any) => ({
    ...internship,
    technologies: internship.technologies.map((tech: RawTechnology) => ({
      ...tech,
      icon: iconMap[tech.icon]
    })),
    projects: internship.projects.map((project: any) => ({
      ...project,
      technologies: project.technologies.map((tech: RawTechnology) => ({
        ...tech,
        icon: iconMap[tech.icon]
      }))
    }))
  }));

  // Extract processed data
  const skills = processedSkills;
  const education = processedEducation;
  const certifications = processedCertifications;
  const technicalSkills = processedTechnicalSkills;
  const projects = processedProjects;
  const about = rawAbout as About;

  // Helper functions
  const getProjectById = (id: string) => {
    return projects.find(project => project.id === id) || null;
  };

  const getProjectsByCategory = () => {
    return projects.reduce((acc: Record<string, Project[]>, project: Project) => {
      const category = project.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(project);
      return acc;
    }, {});
  };

  const getProjectsBySkill = (skillId: string) => {
    const skill = skills.find(s => s.id === skillId);
    if (!skill) return [];
    
    return projects.filter(project => 
      project.skillDetails.some((detail: SkillDetail) => detail.name === skill.title)
    );
  };

  const getSkillsForProject = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return [];
    
    return skills.filter(skill => 
      project.skillDetails.some((detail: SkillDetail) => detail.name === skill.title)
    );
  };

  return {
    skills,
    education,
    certifications,
    technicalSkills,
    projects,
    about,
    internships,
    navbar,
    getProjectById,
    getProjectsByCategory,
    getProjectsBySkill,
    getSkillsForProject,
    getImageUrl,
    getPdfViewerUrl
  };
};

export default usePortfolioData; 