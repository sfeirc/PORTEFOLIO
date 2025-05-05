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
  
  // If the path starts with a slash, it's a public path
  if (path.startsWith('/')) {
    return path;
  }
  
  // Otherwise, assume it's a relative path to the images folder
  return `/images/${path}`;
};

/**
 * Helper function to get PDF viewer URL that works on GitHub Pages
 * @param path - PDF path from the JSON
 * @returns - Embeddable PDF viewer URL
 */
export const getPdfViewerUrl = (path: string): string => {
  // If the path is a Google Drive link, convert it to an embedded viewer URL
  if (path.includes('drive.google.com')) {
    // Convert Google Drive link to embedded viewer format
    // Example: https://drive.google.com/file/d/FILE_ID/view -> https://drive.google.com/file/d/FILE_ID/preview
    return path.replace('/view', '/preview');
  }
  
  // If the path is already a full URL (likely an external PDF hosting service like PDF.io, DocDroid, etc.)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    // For example, if we're using PDF Embed API service
    if (path.includes('pdf.io') || path.includes('docdroid.net') || path.includes('scribd.com')) {
      return path;
    }
    
    // For other URLs, use Google Doc Viewer as a fallback
    return `https://docs.google.com/viewer?url=${encodeURIComponent(path)}&embedded=true`;
  }
  
  // For placeholder or empty URLs, return a default "PDF not available" image URL
  if (!path || path === "") {
    return "https://via.placeholder.com/800x600?text=PDF+Not+Available";
  }

  // For local PDFs, we'll use a predefined Google Drive folder with the same PDF names
  // Format: /filename.pdf -> Google Drive viewer URL
  // 
  // HOW TO UPDATE THIS MAPPING:
  // 1. Upload your PDF to Google Drive
  // 2. Right-click on the file and select "Share"
  // 3. Make sure sharing is set to "Anyone with the link can view"
  // 4. Click "Copy link"
  // 5. The link will look like: https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing
  // 6. Extract the FILE_ID portion and create a mapping entry like:
  //    "/your/path/filename.pdf": "https://drive.google.com/file/d/YOUR_FILE_ID/preview"
  //
  const pdfMappings: Record<string, string> = {
    "/certifications/ibm-ai-certification.pdf": "https://drive.google.com/file/d/1LPj5xO9Ly8xmPxQJUqV2XqYcL2SVPESJ/preview",
    "/certifications/cisco-junior-certification.pdf": "https://drive.google.com/file/d/1TxHgEW5Qf8zLpYy2ZfFPzHR_1qQNIyD2/preview",
    "/certifications/cisco-essentials-certification.pdf": "https://drive.google.com/file/d/1nE3kJA2M4QX4nMHx2rnKcBzOHMNnlH1M/preview",
    "/certifications/cisco-intro-certification.pdf": "https://drive.google.com/file/d/1dXf9JfSIoD9Ke_dOP6XF-9c8DVTzGpZ7/preview",
    "/certifications/codingame-js-certification.pdf": "https://drive.google.com/file/d/1VXPzs7VZuxM3bDNvLBZXHsVKpWtpAJu4/preview",
    "/certifications/codingame-csharp-certification.pdf": "https://drive.google.com/file/d/1kL2V87MXPQsf0y_CKR9R0oCKaolwHLU0/preview",
    "/certifications/codingame-cpp-certification.pdf": "https://drive.google.com/file/d/1P9qHKC4yWHMXylvYR6tnM0XR4QwsXZvT/preview",
    "/certifications/codingame-python-certification.pdf": "https://drive.google.com/file/d/1bHzOWpXBL9-mMP_FhXB0EefoA2Rz-u8j/preview",
    "/internships/excelia-internship-agreement-1.pdf": "https://drive.google.com/file/d/1w3MLXd-d2PuJdD6qOjfnq7CTL-9AjHYP/preview",
    "/internships/excelia-internship-mission-1.pdf": "https://drive.google.com/file/d/16uXWJ4rKfFgrZb8X6Xw75ww6pFxdNu7j/preview",
    "/internships/excelia-internship-agreement-2.pdf": "https://drive.google.com/file/d/1RwWKfLKqyDvWW3Rf6RJ8KLmCdwSC3Vu7/preview",
    "/internships/excelia-internship-mission-2.pdf": "https://drive.google.com/file/d/1dEnYPGBDYcPE-xXCJb_dPkTWsKrdJnV8/preview"
  };
  
  // Return the mapped Google Drive URL or a placeholder if the mapping doesn't exist
  return pdfMappings[path] || "https://via.placeholder.com/800x600?text=PDF+Not+Available";
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

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  technologies: Technology[];
  features: string[];
  image: string;
  projectImage?: string;
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

// Type for raw data from JSON
interface RawSkill {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
}

interface RawCompetency {
  title: string;
  icon: string;
  description: string;
  projects: string[];
  skills?: { name: string; icon: string }[];
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
  size: string;
  gradient: string;
  icon: string;
  category: string;
  isInternship: boolean;
  skillDetails: SkillDetail[];
}

// Helper functions for data manipulation
export const usePortfolioData = () => {
  // Extract and process data from the JSON
  const processedNavbar = {
    title: portfolioData.navbar.title,
    items: portfolioData.navbar.items
  };

  // Process skills - adding icon components
  const processedSkills = (portfolioData.skills as RawSkill[]).map((skill) => ({
    ...skill,
    icon: iconMap[skill.icon] || DocumentTextIcon
  }));

  // Process competencies with icon components
  const processedCompetencies = (portfolioData.competencies as RawCompetency[]).map((competency) => ({
    ...competency,
    icon: iconMap[competency.icon] || DocumentTextIcon,
    skills: competency.skills?.map((skill) => ({
      ...skill,
      icon: iconMap[skill.icon] || DocumentTextIcon
    })) || []
  }));

  // Process education with icon components
  const processedEducation = (portfolioData.education as RawEducation[]).map((education) => ({
    ...education,
    skills: education.skills.map((skill) => ({
      ...skill,
      icon: iconMap[skill.icon] || DocumentTextIcon
    }))
  }));

  // Process certifications with icon components
  const processedCertifications = (portfolioData.certifications as RawCertification[]).map((cert) => ({
    ...cert,
    icon: iconMap[cert.icon] || DocumentTextIcon
  }));

  // Process technical skills with icon components
  const rawTechnicalSkills = portfolioData.technicalSkills as {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: RawTechnology[];
  };
  
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
  const processedProjects = (portfolioData.projects as RawProject[]).map((project) => ({
    ...project,
    icon: iconMap[project.icon] || DocumentTextIcon,
    technologies: project.technologies.map((tech) => ({
      ...tech,
      icon: iconMap[tech.icon] || DocumentTextIcon
    }))
  }));

  // Extract processed data
  const navbar = processedNavbar;
  const skills = processedSkills;
  const competencies = processedCompetencies;
  const education = processedEducation;
  const certifications = processedCertifications;
  const technicalSkills = processedTechnicalSkills;
  const projects = processedProjects;

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
    competencies,
    education,
    certifications,
    technicalSkills,
    projects,
    about: portfolioData.about as About,
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