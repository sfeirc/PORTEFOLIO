'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-200 to-dark-300" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <motion.div 
          className="absolute inset-0 bg-gradient-conic from-primary via-white/5 to-primary rounded-full opacity-20 blur-5xl"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-conic from-secondary via-white/10 to-secondary rounded-full opacity-10 blur-4xl"
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      {/* Profile Section */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center gap-12 mb-16"
          >
            {/* Profile Image Container */}
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Rotating Border */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary via-white/20 to-primary rounded-full opacity-75 blur-sm group-hover:opacity-100"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Image Container */}
              <motion.div 
                className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-sm"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="https://avatars.githubusercontent.com/u/73343957?v=4"
                  alt="Clovis SFEIR"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Profile Info */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-4 relative inline-block"
                >
                  <motion.span 
                    className="bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-white animate-gradient relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Clovis SFEIR
                  </motion.span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white/50 to-secondary/50 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  />
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative"
                >
                  <p className="text-2xl text-gray-300 mb-2 font-light">Étudiant Développeur</p>
                  <p className="text-xl text-gray-400 font-light">BTS SIO SLAM • Lycée Fénelon</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="text-center mt-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light"
            >
              Passionné par le développement web et la création d'expériences numériques innovantes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button 
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white/90 font-medium transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
              </motion.button>
              <motion.button 
                className="px-8 py-3 border border-white/10 rounded-full text-white/80 font-medium transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.div className="w-1 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 