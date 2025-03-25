'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Projects from './Projects';

const skills = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Three.js',
  'GSAP',
  'Tailwind CSS'
];

const experiences = [
  {
    title: 'BTS SIO SLAM',
    company: 'Lycée Fénelon',
    period: '2023 - Présent',
    description: 'Formation en développement d\'applications et solutions digitales'
  },
  {
    title: 'Baccalauréat',
    company: 'Lycée Fénelon',
    period: '2022 - 2023',
    description: 'Spécialités Mathématiques et Sciences de l\'Ingénieur'
  }
];

const About = () => {
  const containerRef = useRef(null);

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
          
        </motion.div>

        <Projects />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Compétences</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Formation</h3>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.title} className="border-l-2 border-white/10 pl-4">
                    <h4 className="font-medium text-lg">{exp.title}</h4>
                    <p className="text-gray-400">{exp.company} • {exp.period}</p>
                    <p className="text-gray-500 mt-2">{exp.description}</p>
                  </div>
                ))}
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
            <h3 className="text-xl font-semibold mb-6">Objectifs</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                En tant qu'étudiant en BTS SIO SLAM, je me spécialise dans le développement
                d'applications et la création de solutions numériques innovantes. Mon objectif
                est de combiner créativité et expertise technique pour concevoir des expériences
                web uniques et performantes.
              </p>
              <p className="text-gray-400">
                Je suis particulièrement intéressé par les technologies front-end modernes
                et l'expérience utilisateur, cherchant constamment à améliorer mes compétences
                et à rester à jour avec les dernières tendances du développement web.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 