'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  CodeBracketIcon,
  CommandLineIcon,
  DocumentTextIcon,
  CpuChipIcon,
  CircleStackIcon,
  SwatchIcon,
  ServerIcon,
  CubeIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import ProjectSkillsMatrix from './ProjectSkillsMatrix';
import { useState, useEffect } from 'react';
import usePortfolioData from '@/data/usePortfolioData';
import type { Internship, InternshipProject, Technology, InternshipDocument, Certification } from '@/data/usePortfolioData';

interface ProjectImage {
  url: string;
  alt: string;
  caption: string;
}

interface Project {
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
  size: string;
  gradient: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  category: string;
  projectImage?: string;
  projectImages?: ProjectImage[];
  isInternship: boolean;
  skillDetails: {
    name: string;
    description: string;
  }[];
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

const Projects = () => {
  const { projects, education, internships, getImageUrl, getPdfViewerUrl } = usePortfolioData();
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProfessionalProject, setSelectedProfessionalProject] = useState<Internship | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<{ title: string; path: string } | null>(null);
  const [selectedInternshipProject, setSelectedInternshipProject] = useState<InternshipProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedProject?.projectImages && selectedProject.projectImages.length > 1) {
        if (event.key === 'ArrowLeft') {
          handlePrevImage();
        } else if (event.key === 'ArrowRight') {
          handleNextImage();
        }
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, currentImageIndex]);

  // Carousel navigation functions
  const handlePrevImage = () => {
    if (selectedProject?.projectImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.projectImages!.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject?.projectImages) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.projectImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Include all projects (both personal and internship projects)
  const filteredProjects = projects;

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

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
            
            {education.map((edu, index) => {
              // Extract the first skill icon if available
              const SkillIcon = edu.skills.length > 0 ? edu.skills[0].icon : null;
              
              return (
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
                          src={getImageUrl(edu.image)}
                          alt="School Logo"
                          fill
                          className="object-contain"
                          sizes="(max-width: 48px) 100vw, 48px"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {SkillIcon && <SkillIcon className="w-5 h-5 text-secondary" />}
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
                        {edu.skills.map((skill: { name: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) => (
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
              );
            })}
          </div>
        </div>

        {/* Professional Projects Section */}
        <div id="stages" className="mb-20">
          <div>
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
              {internships.map((internship) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedProfessionalProject(internship)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  <div className="relative glass p-8 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 bg-white/5 rounded-full p-2">
                        <Image
                          src={internship.companyLogo}
                          alt={`${internship.company} Logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 64px) 100vw, 64px"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                          {internship.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{internship.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {internship.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies principales :</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech: Technology, index: number) => (
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Projects Section */}
        <div id="projets" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
              Mes Projets
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`glass p-6 rounded-lg border transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  project.isInternship 
                    ? 'border-blue-500/30 hover:border-blue-400/50 bg-blue-500/5' 
                    : 'border-white/10 hover:border-secondary/30'
                } ${project.gradient}`}
                onClick={() => setSelectedProject(project as Project)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/5 p-2 rounded-full flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    {project.isInternship && (
                      <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full mt-1">
                        Projet de Stage
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">{project.period}</p>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech: Technology, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors flex items-center gap-1"
                    >
                      <tech.icon className="w-3 h-3 text-secondary" />
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.skillDetails.map((skill: { name: string }) => skill.name).slice(0, 2).map((tag: string, index: number) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.skillDetails.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded-full">
                        +{project.skillDetails.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
              Compétences
            </h2>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                Matrice des Compétences par Projet
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(getPdfViewerUrl('/skills-matrix/competences-matrix.pdf'), '_blank')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary/20 to-secondary/10 hover:from-secondary/30 hover:to-secondary/20 border border-secondary/30 rounded-lg text-secondary font-medium transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20"
              >
                <DocumentTextIcon className="w-5 h-5" />
                Télécharger la matrice complète (PDF)
              </motion.button>
            </div>
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
                        src={getImageUrl(selectedProject.image)}
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
                      {selectedProject.technologies.map((tech: Technology, index: number) => (
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
                      {selectedProject.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-secondary">•</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Compétences liées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skillDetails.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right column: Project image/carousel */}
                <div className="lg:col-span-2 flex flex-col">
                  <h4 className="text-lg font-semibold mb-4">Aperçu du Projet</h4>
                  {selectedProject.projectImages && selectedProject.projectImages.length > 0 ? (
                    <div className="relative flex-1 rounded-xl overflow-hidden border-2 border-secondary/30">
                      {/* Main image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={getImageUrl(selectedProject.projectImages[currentImageIndex].url)}
                          alt={selectedProject.projectImages[currentImageIndex].alt}
                          fill
                          className="object-contain !p-4"
                          sizes="(max-width: 768px) 100vw, 66vw"
                        />
                      </div>
                      
                      {/* Navigation arrows */}
                      {selectedProject.projectImages.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                          >
                            <ChevronLeftIcon className="w-6 h-6" />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                          >
                            <ChevronRightIcon className="w-6 h-6" />
                          </button>
                        </>
                      )}
                      
                      {/* Image indicators */}
                      {selectedProject.projectImages.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                          {selectedProject.projectImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentImageIndex 
                                  ? 'bg-secondary' 
                                  : 'bg-white/50 hover:bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                      
                      {/* Image caption */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-sm text-center">
                          {selectedProject.projectImages[currentImageIndex].caption}
                        </p>
                      </div>
                    </div>
                  ) : selectedProject.projectImage ? (
                    <div className="relative flex-1 rounded-xl overflow-hidden border-2 border-secondary/30">
                      <div className="absolute inset-0">
                        <Image
                          src={getImageUrl(selectedProject.projectImage)}
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
                      src={selectedProfessionalProject.companyLogo}
                      alt={`${selectedProfessionalProject.company} Logo`}
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
                      {selectedProfessionalProject.technologies.map((tech: Technology, index: number) => (
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

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Documents de Stage :</h4>
                    <div className="flex flex-col gap-2">
                      {selectedProfessionalProject.documents.map((doc: InternshipDocument) => (
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
                    {selectedProfessionalProject.projects.map((project: InternshipProject, index: number) => (
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
                            {project.technologies.map((tech: Technology, techIndex: number) => (
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
                            {project.features.map((feature: string, featureIndex: number) => (
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
              className="glass p-8 rounded-lg w-full max-w-7xl h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                  {selectedDocument.title}
                </h3>
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex-1 bg-white rounded-lg overflow-hidden mb-3 relative">
                  <iframe
                    src={getPdfViewerUrl(selectedDocument.path)}
                    className="w-full h-full"
                    title={selectedDocument.title}
                    allowFullScreen
                    onError={(e) => {
                      const iframe = e.target as HTMLIFrameElement;
                      if (iframe.contentDocument?.body.innerHTML.includes('Une autorisation est nécessaire')) {
                        iframe.style.display = 'none';
                        const fallback = iframe.parentElement?.querySelector('.pdf-fallback');
                        if (fallback) {
                          fallback.classList.remove('hidden');
                        }
                      }
                    }}
                  />
                  <div className="pdf-fallback hidden absolute inset-0 bg-gray-900/95 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 mb-4 text-secondary">
                      <DocumentTextIcon className="w-full h-full" />
                    </div>
                    <h5 className="text-xl font-semibold mb-2">Accès au document restreint</h5>
                    <p className="text-gray-400 mb-6">Le document nécessite une autorisation pour être visualisé dans l'aperçu intégré.</p>
                    <a 
                      href={selectedDocument.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-lg border border-secondary/20 transition-colors flex items-center gap-2"
                    >
                      <span>Ouvrir dans Google Drive</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="text-sm text-white/70 flex items-center justify-between">
                  <span>Document servi via Google Drive</span>
                  <a 
                    href={selectedDocument.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 flex items-center gap-1 transition-colors"
                  >
                    <span>Ouvrir dans un nouvel onglet</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
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
                      {selectedInternshipProject.technologies.map((tech: Technology, index: number) => (
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
                      {selectedInternshipProject.features.map((feature: string, index: number) => (
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
                        src={getImageUrl(selectedInternshipProject.image)}
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