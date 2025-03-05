import React from 'react';
import { motion } from 'framer-motion';
import SeaverseHome from '../assets/SeaverseHome.mp4';

const text = "Revolutionizing Marine Technology 🌊";

const HeroSection = () => {
  // Animation variants for each letter
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for the text and button
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 3 } }, // Delay to sync with the text animation
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={SeaverseHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        {/* Letter-by-letter animation with looping reveal & disappear */}
        <motion.h1
          className="text-5xl font-bold text-white"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08, // Reveal letters one by one
                delayChildren: 0.5, // Initial delay before starting
                repeat: Infinity, // Loop indefinitely
                repeatType: 'reverse', // Reverse the animation after completion
                repeatDelay: 1, // Wait time before restarting
              },
            },
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{ duration: 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Fade-in animation for the text below */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-lg text-gray-400 mt-4 max-w-2xl"
        >
          Explore the future of underwater exploration, AI-powered navigation, and deep-sea robotics.
        </motion.p>

        {/* Fade-in animation for the button */}
        <motion.button
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mt-6 px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;