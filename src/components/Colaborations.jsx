import React from "react";
import { FaHandshake, FaUsers, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { colors } from "../utils/color";

const collaborationFeatures = [
  {
    icon: <FaHandshake size={40} color={colors.primary} />,
    title: "Seamless Partnerships",
    description: "We connect businesses with the right partners for growth and innovation."
  },
  {
    icon: <FaUsers size={40} color={colors.primary} />,
    title: "Community Driven",
    description: "Engage with a network of professionals and industry leaders."
  },
  {
    icon: <FaRocket size={40} color={colors.primary} />,
    title: "Accelerated Growth",
    description: "Leverage AI and data insights to drive your business forward."
  }
];

const BusinessAndCollaboration = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 text-center flex flex-col items-center" style={{ backgroundColor: colors.background }}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold mb-6"
          style={{ color: colors.primary }}
        >
          Business & Collaboration
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {collaborationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-lg shadow-lg border flex flex-col items-center text-center"
              style={{ borderColor: colors.border, backgroundColor: colors.backgroundSecondary }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4" style={{ color: colors.primary }}>{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAndCollaboration;
