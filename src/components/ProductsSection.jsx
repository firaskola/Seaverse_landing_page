import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Ocean from '../assets/ocean-view-water.jpg';
import { colors } from '../utils/color'; // Import the colors

const ProductsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div 
      className="relative  bg-cover bg-center py-18" 
      style={{
        backgroundImage: `url(${Ocean})`,
        backgroundAttachment: "fixed", // Fixes the background image
        backgroundColor: colors.background, // Fallback background color
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: colors.background, opacity: 0.8 }}></div>

      {/* Scrollable Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white px-6 overflow-auto">
        
        {/* Title */}
        <motion.h1 
          className="text-4xl font-bold text-center" 
          style={{ color: colors.primary }}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
        >
          Our Products
        </motion.h1>
        <motion.p 
          className="text-lg text-center mt-2 max-w-2xl" 
          style={{ color: colors.text }}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          Discover our range of cutting-edge products designed to drive innovation and efficiency.
        </motion.p>

        {/* Scrollable Section */}
        <motion.div 
          className="mt-10 flex flex-col md:flex-row items-center gap-6 max-w-6xl overflow-auto"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Product 1 */}
          <motion.div 
            className="p-6 rounded-lg shadow-lg max-w-sm"
            style={{ backgroundColor: colors.backgroundSecondary, borderColor: colors.border, borderWidth: '1px' }}
            variants={itemVariants}
          >
            <motion.img 
              src="https://picsum.photos/400/400" 
              alt="AI Automation Tool" 
              className="rounded-lg w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }} // Zoom effect on hover
              transition={{ duration: 0.3 }} // Smooth transition
            />
            <h2 className="text-xl font-semibold mt-4" style={{ color: colors.primary }}>
              AI Automation Tool
            </h2>
            <p className="mt-2" style={{ color: colors.text }}>
              A powerful AI-driven solution to enhance productivity and efficiency.
            </p>
          </motion.div>

          {/* Product 2 */}
          <motion.div 
            className="p-6 rounded-lg shadow-lg max-w-sm"
            style={{ backgroundColor: colors.backgroundSecondary, borderColor: colors.border, borderWidth: '1px' }}
            variants={itemVariants}
          >
            <motion.img 
              src="https://picsum.photos/400/400" 
              alt="Cloud Software" 
              className="rounded-lg w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }} // Zoom effect on hover
              transition={{ duration: 0.3 }} // Smooth transition
            />
            <h2 className="text-xl font-semibold mt-4" style={{ color: colors.primary }}>
              Cloud Software
            </h2>
            <p className="mt-2" style={{ color: colors.text }}>
              An innovative cloud-based tool that streamlines workflows effortlessly.
            </p>
          </motion.div>

          {/* Product 3 */}
          <motion.div 
            className="p-6 rounded-lg shadow-lg max-w-sm"
            style={{ backgroundColor: colors.backgroundSecondary, borderColor: colors.border, borderWidth: '1px' }}
            variants={itemVariants}
          >
            <motion.img 
              src="https://picsum.photos/400/400" 
              alt="Cybersecurity Suite" 
              className="rounded-lg w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }} // Zoom effect on hover
              transition={{ duration: 0.3 }} // Smooth transition
            />
            <h2 className="text-xl font-semibold mt-4" style={{ color: colors.primary }}>
              Cybersecurity Suite
            </h2>
            <p className="mt-2" style={{ color: colors.text }}>
              A next-gen security solution designed for protection and performance.
            </p>
          </motion.div>

        </motion.div>

        {/* Additional Info Section
        <motion.div 
          className="mt-16 text-center max-w-4xl"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold" style={{ color: colors.primary }}>
            Why Choose Our Products?
          </h2>
          <ul className="mt-4 space-y-2 text-lg" style={{ color: colors.text }}>
            <li>✅ High-quality and reliable solutions.</li>
            <li>✅ Designed for efficiency and innovation.</li>
            <li>✅ Trusted by industry leaders worldwide.</li>
            <li>✅ Continuous support and upgrades.</li>
          </ul>
        </motion.div> */}

      </div>
    </div>
  );
};

export default ProductsSection;