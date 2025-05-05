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

// Type definitions that mirror the JSON structure
export interface Skill {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  color: string;
}

export interface Competency {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  projects: string[];
}

export interface EducationItem {
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
  keyPoints: string[];
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

export interface TechnicalSkills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  technologies: {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[];
  features: string[];
  image: string;
  projectImage?: string;
  size: string;
  gradient: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  category: string;
  isInternship: boolean;
  skillDetails: {
    name: string;
    description: string;
  }[];
}

// Function to transform the raw JSON data with proper icon components
export const usePortfolioData = () => {
  // Convert skill icon strings to actual components
  const skills: Skill[] = portfolioData.skills.map(skill => ({
    ...skill,
    icon: iconMap[skill.icon]
  }));

  // Convert competency icon strings to actual components
  const competencies: Competency[] = portfolioData.competencies.map(comp => ({
    ...comp,
    icon: iconMap[comp.icon]
  }));

  // Convert education icon strings to actual components
  const education: EducationItem[] = portfolioData.education.map(edu => ({
    ...edu,
    skills: edu.skills.map(skill => ({
      ...skill,
      icon: iconMap[skill.icon]
    }))
  }));

  // Convert certification icon strings to actual components
  const certifications: Certification[] = portfolioData.certifications.map(cert => ({
    ...cert,
    icon: iconMap[cert.icon]
  }));

  // Convert technical skills icon strings to actual components
  const technicalSkills: TechnicalSkills = {
    ...portfolioData.technicalSkills,
    tools: portfolioData.technicalSkills.tools.map(tool => ({
      ...tool,
      icon: iconMap[tool.icon]
    }))
  };

  // Convert project icon strings to actual components
  const projects: Project[] = portfolioData.projects.map(project => ({
    ...project,
    icon: iconMap[project.icon],
    technologies: project.technologies.map(tech => ({
      ...tech,
      icon: iconMap[tech.icon]
    }))
  }));

  // Helper functions
  const getProjectById = (id: string): Project | undefined => {
    return projects.find(p => p.id === id);
  };

  const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter(p => p.category === category);
  };

  const getProjectsBySkill = (skillId: string): Project[] => {
    const skill = skills.find(s => s.id === skillId);
    if (!skill) return [];
    
    return projects.filter(project => 
      project.skillDetails.some(detail => detail.name === skill.title)
    );
  };

  const getSkillsForProject = (projectId: string): Skill[] => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return [];
    
    return project.skillDetails.map(detail => {
      const skill = skills.find(s => s.title === detail.name);
      return skill as Skill;
    }).filter(Boolean);
  };

  return {
    skills,
    competencies,
    education,
    certifications,
    technicalSkills,
    projects,
    about: portfolioData.about,
    getProjectById,
    getProjectsByCategory,
    getProjectsBySkill,
    getSkillsForProject
  };
};

export default usePortfolioData; 