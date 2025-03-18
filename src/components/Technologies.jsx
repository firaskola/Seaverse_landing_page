import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../utils/color.js";

const technologies = [
  {
    title: "Artificial Intelligence",
    description:
      "Explore how AI is transforming industries with cutting-edge algorithms and machine learning models.",
    image: "https://picsum.photos/400/400",
  },
  {
    title: "Blockchain Technology",
    description: "Discover the decentralized future with blockchain's secure and transparent systems.",
    image: "https://picsum.photos/400/400",
  },
  {
    title: "Quantum Computing",
    description: "Unlock the potential of quantum mechanics to revolutionize computing power.",
    image: "https://picsum.photos/400/400",
  },
];

const Technologies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      className="relative flex flex-col items-center px-6 md:px-20 py-16"
      initial={{ backgroundColor: colors.backgroundSecondary }}
      animate={{ backgroundColor: isHovered ? colors.background : colors.backgroundSecondary }} // Smooth background transition
      whileHover={{ scale: 1.02 }} // Zoom effect on hover
      transition={{ type: "spring", stiffness: 300, duration: 0.5 }} // Smooth spring animation
      onHoverStart={() => setIsHovered(true)} // Track hover state
      onHoverEnd={() => setIsHovered(false)} // Reset hover state
    >
      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="text-4xl font-bold text-center mb-12"
        style={{ color: colors.primary }}
      >
        Technologies
      </motion.h2>

      {/* Technologies Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl w-full gap-12">
        {/* Left: Image Content */}
        <div className="md:w-1/2 flex justify-center md:justify-start relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={technologies[currentIndex].image}
              alt="Technology Placeholder"
              className="w-[350px] md:w-[400px] h-[350px] object-cover rounded-2xl shadow-lg"
              style={{ borderColor: colors.border, borderWidth: "4px" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 flex flex-col justify-start relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              style={{ color: colors.text }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{technologies[currentIndex].title}</h2>
              <p className="text-lg leading-relaxed text-justify">
                {technologies[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-teal-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Technologies;