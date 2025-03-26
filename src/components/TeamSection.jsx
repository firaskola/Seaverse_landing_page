// src/components/TeamSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../utils/color';

const TeamSection = ({ teamMembers }) => {
  const [selectedMember, setSelectedMember] = useState(null); // Track selected member

  // Handle click on a team member
  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  // Close the overlay
  const closeOverlay = () => {
    setSelectedMember(null);
  };

  return (
    <div className="w-full py-12">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        style={{ color: colors.primary }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Meet Our Team
      </motion.h1>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            className="relative min-w-[220px] h-[340px] rounded-xl overflow-hidden border shadow-md flex-shrink-0 cursor-pointer"
            style={{ borderColor: colors.border }}
            onClick={() => handleMemberClick(member)} // Handle click
            initial={{ opacity: 0.9, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-all duration-300 grayscale hover:grayscale-0"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-4 space-y-2 transition-opacity duration-300 opacity-0 hover:opacity-100"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            >
              <h3 className="text-lg font-bold" style={{ color: colors.accent }}>
                {member.name}
              </h3>
              <p className="text-sm font-medium" style={{ color: colors.text }}>
                {member.role}
              </p>
              <p className="text-xs" style={{ color: colors.secondary }}>
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overlay for Selected Member */}
      {selectedMember && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeOverlay} // Close overlay on click outside
        >
          <div
            className="bg-white rounded-lg p-8 max-w-2xl mx-4 relative"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the overlay from closing it
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={closeOverlay}
            >
              &times;
            </button>

            {/* Member Details */}
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-48 h-64 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedMember.name}</h2>
                <p className="text-lg font-medium mb-4">{selectedMember.role}</p>
                <p className="text-gray-700">{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;