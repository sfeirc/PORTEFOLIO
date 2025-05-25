'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import usePortfolioData from '@/data/usePortfolioData';
import { 
  CodeBracketIcon,
  CpuChipIcon,
  BeakerIcon,
  SwatchIcon,
  CircleStackIcon,
  WrenchIcon,
  XMarkIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

// Add type definitions
type Certification = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
  documentImage: string;
  description: string;
};

const About = () => {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const { certifications, technicalSkills, about, getImageUrl, getPdfViewerUrl } = usePortfolioData();

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
            À propos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez mon parcours et mes compétences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Technical Skills Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                Compétences Techniques
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Languages */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <CodeBracketIcon className="w-6 h-6 text-secondary" />
                    <h4 className="text-lg font-semibold">Langages</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        <CpuChipIcon className="w-4 h-4 text-secondary" />
                        {lang}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Frameworks & Libraries */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <SwatchIcon className="w-6 h-6 text-secondary" />
                    <h4 className="text-lg font-semibold">Frameworks & Librairies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.frameworks.map((framework) => (
                      <span
                        key={framework}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        <BeakerIcon className="w-4 h-4 text-secondary" />
                        {framework}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Databases */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <CircleStackIcon className="w-6 h-6 text-secondary" />
                    <h4 className="text-lg font-semibold">Bases de données</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.databases.map((db) => (
                      <span
                        key={db}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        <CircleStackIcon className="w-4 h-4 text-secondary" />
                        {db}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Tools */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <WrenchIcon className="w-6 h-6 text-secondary" />
                    <h4 className="text-lg font-semibold">Outils</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.tools.map((tool) => (
                      <span
                        key={tool.name}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        <tool.icon className="w-4 h-4 text-secondary" />
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Mon Parcours
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
                À Propos de Moi
              </h3>
              <div className="text-gray-300 space-y-4">
                {about.description && (
                  Array.isArray(about.description) 
                    ? about.description.map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                      ))
                    : <p>{about.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>



        {/* Certifications Section */}
        <div id="certifications" className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white">
              Certifications
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mes certifications et formations complémentaires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedCertification(cert)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-4 rounded-xl overflow-hidden border-2 border-secondary/30 bg-white p-4">
                    <img 
                      src={getImageUrl(cert.image)}
                      alt={cert.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                  <p className="text-secondary mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <cert.icon className="w-4 h-4" />
                    <span>{cert.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certification Modal */}
          {selectedCertification && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedCertification(null)}
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
                    {selectedCertification.title}
                  </h3>
                  <button
                    onClick={() => setSelectedCertification(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
                  {/* Left column: Badge and info */}
                  <div className="lg:col-span-1 flex flex-col">
                    <div className="w-full aspect-square mb-4 rounded-xl overflow-hidden border-2 border-secondary/30 bg-white p-4">
                      <img 
                        src={getImageUrl(selectedCertification.image)}
                        alt={selectedCertification.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <selectedCertification.icon className="w-5 h-5" />
                      <span>{selectedCertification.category}</span>
                    </div>
                    <p className="text-gray-300">{selectedCertification.description}</p>
                  </div>
                  
                  {/* Right column: Document */}
                  <div className="lg:col-span-2 flex flex-col">
                    <h4 className="text-lg font-semibold mb-4">Document de Certification</h4>
                    {selectedCertification.documentImage ? (
                      <div className="flex flex-col flex-1">
                        <div className="flex-1 rounded-xl overflow-hidden border-2 border-secondary/30 mb-3 relative">
                          <iframe
                            src={getPdfViewerUrl(selectedCertification.documentImage)}
                            className="w-full h-full"
                            title="Certification Document"
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
                              href={selectedCertification.documentImage}
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
                        <div className="text-sm text-gray-400 flex items-center justify-between">
                          <span>Document servi via Google Drive</span>
                          <a 
                            href={selectedCertification.documentImage}
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
                    ) : (
                      <div className="flex-1 rounded-xl border-2 border-secondary/30 flex items-center justify-center text-gray-400">
                        Document de certification à venir
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About; 