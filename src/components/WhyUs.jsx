import React from "react";
import { motion } from "framer-motion";
import { colors } from "../utils/color.js";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const WhyUs = () => {
  return (
    <section
      className="py-16 text-center"
      style={{ backgroundColor: colors.backgroundSecondary }}
    >
      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        className="text-4xl font-bold"
        style={{ color: colors.primary }}
      >
        WHY US?
      </motion.h2>

      {/* Divider Line */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        className="w-12 h-1 mx-auto my-4"
        style={{ backgroundColor: colors.accent }}
      />

      {/* Description */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        className="text-lg max-w-2xl mx-auto px-4"
        style={{ color: colors.text }}
      >
        You have an idea for a great product, we have a great team to execute your idea.
      </motion.p>
    </section>
  );
};

export default WhyUs;