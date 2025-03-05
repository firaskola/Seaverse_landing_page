import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { colors } from "../utils/color";

const testimonials = [
  {
    text: "AI is decarbonisation’s secret weapon – a ‘silver bullet’ which can make a dramatic improvement to every fleet.",
    author: "Dr Kyriakopoulos",
    role: "DeepSea Co-founder & CEO",
  },
  {
    text: "With AI-driven insights, we have seen significant efficiency improvements in our maritime operations.",
    author: "Sophia Carter",
    role: "Maritime Logistics Expert",
  },
  {
    text: "Machine learning algorithms help us optimize fuel consumption, reducing both costs and carbon footprint.",
    author: "Liam Robertson",
    role: "Sustainable Shipping Consultant",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center px-6 py-10 space-y-8"
      style={{ backgroundColor: colors.background, color: colors.text }}
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
   
    >
      {/* Heading */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-center"
        style={{ color: colors.primary }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonials Container */}
      <div className="relative flex justify-center items-center w-full max-w-4xl h-64 md:h-72 overflow-hidden">
        {testimonials.map((testimonial, i) => {
          const position = (i - index + testimonials.length) % testimonials.length;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -200 }}
              animate={{
                x: position === 0 ? 0 : position === 1 ? -200 : 200,
                scale: position === 0 ? 1 : 0.85,
                opacity: position === 0 ? 1 : 0.7,
              }}
              transition={{ duration: 0.5 }}
              className="absolute w-full md:w-3/4 lg:w-2/3 p-6 md:p-10 rounded-lg shadow-lg border text-center"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.backgroundSecondary,
                zIndex: position === 0 ? 10 : 5,
              }}
            >
              <p className="text-lg md:text-xl font-light leading-relaxed">
                <span style={{ color: colors.accent }}>“</span>
                {testimonial.text}
                <span style={{ color: colors.accent }}>”</span>
              </p>
              <p className="mt-4 md:mt-6 font-semibold text-md md:text-lg">
                {testimonial.author},{" "}
                <span className="font-bold" style={{ color: colors.accent }}>
                  {testimonial.role}
                </span>
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {testimonials.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              backgroundColor: i === index ? colors.accent : "gray",
              scale: i === index ? 1.3 : 1,
            }}
            className="w-3 h-3 rounded-full transition-all"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TestimonialSlider;
