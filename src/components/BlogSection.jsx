import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../utils/color.js";

const blogs = [
  {
    title: "Project Ekalavya",
    description:
      "Project Ekalavya is more than a mere initiative; it embodies the unwavering commitment and excellence exemplified by Ekalavya.",
    image: "https://picsum.photos/400/400",
  },
  {
    title: "Future of AI in Robotics",
    description: "How artificial intelligence is revolutionizing robotics and automation.",
    image: "https://picsum.photos/400/400",
  },
  {
    title: "Breakthroughs in Space Tech",
    description: "Exploring the latest innovations in space exploration and technology.",
    image: "https://picsum.photos/400/400",
  },
];

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative flex flex-col items-center px-6 md:px-20 py-16" style={{ backgroundColor: colors.backgroundSecondary }}>
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

      {/* Blog Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl w-full gap-12">
        {/* Left: Blog Text */}
        <div className="md:w-1/2 flex flex-col justify-start relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              style={{ color: colors.text }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>
                {blogs[currentIndex].title}
              </h2>
              <p className="text-lg leading-relaxed text-justify">{blogs[currentIndex].description}</p>
              <button className="mt-6 px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition">
                Read More
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Blog Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={blogs[currentIndex].image}
              alt="Blog Placeholder"
              className="w-[350px] md:w-[400px] h-[350px] object-cover rounded-2xl shadow-lg"
              style={{ borderColor: colors.border, borderWidth: "4px" }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {blogs.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-teal-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          className="px-4 py-2 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition"
        >
          Previous
        </button>
        <button
          onClick={goToNext}
          className="px-4 py-2 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition"
        >
          Next
        </button>
      </div> */}
    </section>
  );
};

export default BlogSection;