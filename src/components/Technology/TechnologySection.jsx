import React from "react";
import { motion } from "framer-motion";
import { colors } from "../../utils/color.js";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const technologies = [
  {
    category: "AI and Robotics",
    title: "Intelligent Solutions for the Ocean",
    description: "Artificial intelligence and robotics are at the core of SEAVERSE's technological advancements. Our intelligent systems are transforming marine exploration, monitoring, and maintenance.",
    technologies: [
      {
        name: "AutoWeld AI",
        description: "An autonomous underwater welding robot that detects and repairs cracks in oil pipelines without human intervention."
      },
      {
        name: "AI-Driven Ocean Monitoring Systems",
        description: "A network of underwater drones and sensors that collect and analyze real-time data on ocean health."
      }
    ],
    image: "https://picsum.photos/800/800?random=1",
    impact: "Enhancing efficiency, reducing risks, and enabling groundbreaking discoveries in marine industries."
  },
  {
    category: "Renewable Ocean Energy",
    title: "Harnessing the Power of the Ocean",
    description: "SEAVERSE is pioneering renewable energy solutions that harness the ocean's natural resources to generate clean, sustainable power.",
    technologies: [
      {
        name: "Wave and Tidal Energy Systems",
        description: "Innovative technologies that convert wave and tidal energy into electricity."
      },
      {
        name: "Ocean Thermal Energy Conversion (OTEC)",
        description: "Uses temperature differences between warm surface water and cold deep water to generate electricity."
      }
    ],
    image: "https://picsum.photos/800/800?random=2",
    impact: "Reducing reliance on fossil fuels and supporting the transition to a sustainable energy future."
  },
  {
    category: "Marine Biotechnology",
    title: "Innovating with Marine Bio-Resources",
    description: "SEAVERSE is leveraging marine biotechnology to develop sustainable solutions for pharmaceuticals, nutraceuticals, and biofuels.",
    technologies: [
      {
        name: "Algae Cultivation Platforms",
        description: "Advanced systems for cultivating high-value algae for bioactive compounds."
      },
      {
        name: "Marine Enzyme Extraction",
        description: "Technologies for extracting marine enzymes for industrial applications."
      }
    ],
    image: "https://picsum.photos/800/800?random=3",
    impact: "Driving innovation in sustainable industries and reducing environmental impact."
  },
  {
    category: "Underwater Communication",
    title: "Connecting the Ocean",
    description: "SEAVERSE is developing advanced communication and sensor networks for underwater environments.",
    technologies: [
      {
        name: "Underwater Communication Systems",
        description: "High-speed, reliable communication systems for underwater drones and sensors."
      },
      {
        name: "Underwater Sensor Networks",
        description: "Network of sensors monitoring ocean conditions in real time."
      }
    ],
    image: "https://picsum.photos/800/800?random=4",
    impact: "Enhancing underwater operations, research, and environmental monitoring."
  },
  {
    category: "Ocean-Based Carbon Capture",
    title: "Fighting Climate Change",
    description: "SEAVERSE is developing innovative solutions to capture and store carbon dioxide using the ocean.",
    technologies: [
      {
        name: "Floating Carbon Capture Platforms",
        description: "Platforms that use marine algae or chemical processes to capture and store CO2."
      }
    ],
    image: "https://picsum.photos/800/800?random=5",
    impact: "Contributing to global efforts to reduce greenhouse gas emissions."
  }
];

const TechnologySection = () => {
  return (
    <div className="py-16 px-6 md:px-20" style={{ backgroundColor: colors.background }}>
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4" style={{ color: colors.primary }}>
          Innovative Technologies for a Blue Future
        </h1>
        <p className="text-xl max-w-4xl mx-auto" style={{ color: colors.text }}>
          At SEAVERSE, we are revolutionizing marine industries with cutting-edge technologies that explore, protect, and sustainably utilize ocean resources.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-8 py-3 rounded-lg font-semibold" style={{ backgroundColor: colors.primary, color: colors.buttonText }}>
            Explore Our Technologies
          </button>
          <button className="px-8 py-3 rounded-lg font-semibold border-2" style={{ borderColor: colors.primary, color: colors.primary }}>
            Partner With Us
          </button>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        className="max-w-6xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
          Transforming the Ocean with Advanced Technology
        </h2>
        <p className="text-lg" style={{ color: colors.text }}>
          The ocean is a vast, untapped resource with immense potential. At SEAVERSE, we are leveraging advanced technologies such as artificial intelligence, robotics, and biotechnology to address global challenges and unlock new opportunities.
        </p>
        {/* Placeholder for video/infographic */}
        <div className="mt-8 w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
          <span style={{ color: colors.text }}>Technology Showcase Video/Infographic</span>
        </div>
      </motion.div>

      {/* Technology Solutions */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: colors.primary }}
        >
          Our Technology Solutions
        </motion.h2>

        {/* Technology Cards */}
        <div className="space-y-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              className={`bg-gray-900 p-8 rounded-xl shadow-lg ${index % 2 === 0 ? '' : ''}`}
              style={{ borderColor: colors.border, borderWidth: "2px" }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                {/* Image */}
                <div className="md:w-1/2 ">
                  <motion.img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Content */}
                <div className="md:w-1/2">
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: colors.accent }}>
                    {tech.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4" style={{ color: colors.text }}>
                    {tech.title}
                  </h3>
                  <p className="mb-6" style={{ color: colors.text }}>
                    {tech.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {tech.technologies.map((item, i) => (
                      <div key={i} className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-bold" style={{ color: colors.primary }}>{item.name}</h4>
                        <p className="text-sm mt-1" style={{ color: colors.text }}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 rounded-lg" style={{ backgroundColor: colors.accent, color: colors.buttonText }}>
                    <h4 className="font-bold">Impact:</h4>
                    <p>{tech.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Collaboration Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
          Join Us in Building the Future of Marine Technology
        </h2>
        <p className="text-lg mb-8" style={{ color: colors.text }}>
          At SEAVERSE, we believe that collaboration is key to driving innovation. We invite technology partners, researchers, and industries to join us in developing groundbreaking solutions.
        </p>
        <button className="px-8 py-3 rounded-lg font-semibold" style={{ backgroundColor: colors.primary, color: colors.buttonText }}>
          Contact Us to Collaborate
        </button>
      </motion.div>
    </div>
  );
};

export default TechnologySection;