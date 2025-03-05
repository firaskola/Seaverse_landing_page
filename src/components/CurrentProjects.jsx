import React from "react";
import { motion } from "framer-motion";
import { colors } from "../utils/color.js";

const projects = [
  {
    title: "Project Neptune",
    description: "Developing AI-driven navigation systems for marine vessels.",
    image: "https://picsum.photos/400/400", // Placeholder image
  },
  {
    title: "Ocean Explorer",
    description: "Innovating underwater drone technology for deep-sea exploration.",
    image: "https://picsum.photos/400/400", // Placeholder image
  },
  {
    title: "Wave Monitor",
    description: "Deploying advanced sensors for real-time ocean wave monitoring.",
    image: "https://picsum.photos/400/400", // Placeholder image
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const CurrentProjects = () => {
  return (
    <div className="py-16 px-6 md:px-20" style={{ backgroundColor: colors.background }}>
      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        className="text-4xl font-bold text-center mb-12"
        style={{ color: colors.primary }}
      >
        Current Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
            style={{ borderColor: colors.border, borderWidth: "2px" }}
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project Title */}
            <h3 className="text-2xl font-bold mt-4" style={{ color: colors.text }}>
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-300 mt-2">{project.description}</p>

            {/* Read More Button */}
            <button
              className="mt-4 px-6 py-2 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition"
            >
              Read More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CurrentProjects;