import React from "react";
import { motion } from "framer-motion";
import { colors } from "../utils/color.js";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactUs = () => {
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
        CONTACT US
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
        className="text-lg max-w-2xl mx-auto px-4 mb-8"
        style={{ color: colors.text }}
      >
        Let's bring your ideas to life! Reach out to us today.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="/contact" // Link to your contact page
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        className="inline-block px-8 py-3 text-lg font-semibold rounded-lg transition"
        style={{
          backgroundColor: colors.accent,
          color: colors.background,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.a>
    </section>
  );
};

export default ContactUs;