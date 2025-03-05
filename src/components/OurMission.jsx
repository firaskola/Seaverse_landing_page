import React from 'react';
import { FaLeaf, FaGlobe, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { colors } from '../utils/color'; // Ensure this file exists

const OurMission = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3, // Stagger animations for child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      className="w-full py-16 px-6 md:px-12 text-center"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
          variants={containerVariants}
          className="text-4xl font-bold mb-6"
          style={{ color: colors.primary }}
        >
          Our Mission
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="text-lg mb-10" 
          style={{ color: colors.text }}
        >
          At <span className="font-semibold" style={{ color: colors.primary }}>Seaverse</span>, we are committed to exploring,
          understanding, and preserving marine ecosystems through cutting-edge technology. Our goal is to uncover the
          ocean’s mysteries, protect marine life, and harness its potential for sustainable innovation.
        </motion.p>

        {/* Mission Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Card 1 - Ocean Conservation */}
          <motion.div 
            variants={itemVariants}
            className="p-6 rounded-lg shadow-lg hover:scale-105 duration-300"
            style={{ backgroundColor: colors.border }}
          >
            <FaGlobe className="text-5xl mx-auto mb-4" style={{ color: colors.text }} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
              Ocean Conservation
            </h3>
            <p style={{ color: colors.text }}>
              Protecting and restoring marine environments to ensure a healthy future for our planet.
            </p>
          </motion.div>
          
          {/* Card 2 - AI & Robotics */}
          <motion.div 
            variants={itemVariants}
            className="p-6 rounded-lg shadow-lg hover:scale-105 duration-300"
            style={{ backgroundColor: colors.border }}
          >
            <FaRobot className="text-5xl mx-auto mb-4" style={{ color: colors.text }} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
              AI & Robotics
            </h3>
            <p style={{ color: colors.text }}>
              Using advanced AI and robotics to explore and analyze marine life in ways never done before.
            </p>
          </motion.div>
          
          {/* Card 3 - Sustainable Innovation */}
          <motion.div 
            variants={itemVariants}
            className="p-6 rounded-lg shadow-lg hover:scale-105 duration-300"
            style={{ backgroundColor: colors.border }}
          >
            <FaLeaf className="text-5xl mx-auto mb-4" style={{ color: colors.text }} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
              Sustainable Innovation
            </h3>
            <p style={{ color: colors.text }}>
              Developing eco-friendly solutions from ocean discoveries for pharmaceuticals & biotechnology.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;