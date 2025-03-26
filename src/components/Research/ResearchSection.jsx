import React from "react";
import { motion } from "framer-motion";
import { colors } from "../../utils/color.js";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const researchAreas = [
  {
    id: 1,
    category: "Marine Biotechnology",
    title: "Unlocking Marine Bio-Resources",
    icon: "🧪",
    description: "Developing innovative methods to cultivate high-value algae and extract bioactive compounds.",
    projects: [
      "Algae cultivation for nutraceuticals",
      "Marine enzyme discovery",
      "Sustainable biopolymers"
    ],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Sustainable Aquaculture",
    title: "Future of Seafood",
    icon: "🐟",
    description: "Developing systems for eco-friendly seafood production at scale.",
    projects: [
      "Offshore aquaculture designs",
      "Alternative feed research",
      "Automated farming systems"
    ],
    image: "https://images.unsplash.com/photo-1584473457409-ceb3f73ee441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Ocean Conservation",
    title: "Ecosystem Restoration",
    icon: "🐠",
    description: "Innovative approaches to protect and restore marine biodiversity.",
    projects: [
      "3D-printed coral reefs",
      "Genetic studies",
      "Ecosystem monitoring"
    ],
    image: "https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "Renewable Energy",
    title: "Ocean-Powered Future",
    icon: "⚡",
    description: "Harnessing ocean energy for sustainable power solutions.",
    projects: [
      "Wave energy converters",
      "Floating desalination",
      "Tidal power systems"
    ],
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    category: "Deep-Sea Exploration",
    title: "The Final Frontier",
    icon: "🌊",
    description: "Exploring uncharted depths to discover new resources and species.",
    projects: [
      "Mineral extraction tech",
      "DNA sequencing platforms",
      "Deep-sea mapping"
    ],
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const ResearchSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: colors.backgroundSecondary }}>
      {/* Hero Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: colors.accent }}>
          <span className="font-semibold uppercase text-sm" style={{ color: colors.buttonText }}>Research & Development</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.primary }}>
          Pioneering <span className="underline decoration-wavy" style={{ textDecorationColor: colors.accent }}>Ocean Science</span> for a Sustainable Future
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-8" style={{ color: colors.text }}>
          At SEAVERSE, we're advancing marine research across five critical domains to unlock the ocean's potential while protecting its delicate ecosystems.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-full font-medium flex items-center gap-2" style={{ backgroundColor: colors.primary, color: colors.buttonText }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Explore Research
          </button>
          <button className="px-6 py-3 rounded-full font-medium border flex items-center gap-2" style={{ borderColor: colors.primary, color: colors.primary }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            Collaborate With Us
          </button>
        </div>
      </motion.div>

      {/* Research Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
        {researchAreas.map((area) => (
          <motion.div 
            key={area.id}
            variants={fadeInVariants}
            whileHover={{ y: -5 }}
            className="group rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
            style={{ backgroundColor: colors.background }}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={area.image} 
                alt={area.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-4xl absolute top-4 right-4" style={{ color: colors.accent }}>
                  {area.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider" style={{ color: colors.accent }}>
                    {area.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1" style={{ color: 'white' }}>{area.title}</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4" style={{ color: colors.text }}>{area.description}</p>
              <div className="space-y-2">
                {area.projects.map((project, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 mt-0.5 mr-2" style={{ color: colors.accent }} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ color: colors.text }}>{project}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-sm font-medium flex items-center gap-1" style={{ color: colors.primary }}>
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="bg-gray-900 rounded-3xl p-8 md:p-12 mb-24"
        style={{ borderColor: colors.border, borderWidth: "1px" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: colors.primary }}>Our Research Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.accent }}>50+</div>
              <div style={{ color: colors.text }}>Published Studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.accent }}>12</div>
              <div style={{ color: colors.text }}>Patents Filed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.accent }}>200+</div>
              <div style={{ color: colors.text }}>Hectares Restored</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.accent }}>15</div>
              <div style={{ color: colors.text }}>Industry Partners</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: colors.accent }}>
          <span className="font-semibold uppercase text-sm" style={{ color: colors.buttonText }}>Get Involved</span>
        </div>
        <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>Shape the Future of Ocean Research</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: colors.text }}>
          Whether you're a researcher, institution, or industry partner, we welcome collaborations that push the boundaries of marine science.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-full font-medium" style={{ backgroundColor: colors.primary, color: colors.buttonText }}>
            Contact Our Research Team
          </button>
          <button className="px-6 py-3 rounded-full font-medium border" style={{ borderColor: colors.primary, color: colors.primary }}>
            View Open Positions
          </button>
          <button className="px-6 py-3 rounded-full font-medium border" style={{ borderColor: colors.primary, color: colors.primary }}>
            Funding Opportunities
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResearchSection;