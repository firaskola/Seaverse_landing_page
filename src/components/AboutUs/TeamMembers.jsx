import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/color';

const teamMembers = [
  {
    name: 'Camilla Wilson',
    role: 'Payment Gateway Support',
    image: 'https://via.placeholder.com/300x400.png?text=Camilla+Wilson',
    description: 'Handles all issues related to payments and gateways.',
  },
  {
    name: 'Olive Nacelle',
    role: 'VP of Customer Success',
    image: 'https://via.placeholder.com/300x400.png?text=Olive+Nacelle',
    description: 'Ensuring customers are successful and satisfied.',
  },
  {
    name: 'Sophie Chamberlain',
    role: 'Specialized Support',
    image: 'https://via.placeholder.com/300x400.png?text=Sophie+Chamberlain',
    description: 'Solving specialized and technical issues.',
  },
  {
    name: 'Jessica Dobrev',
    role: 'Payments Support',
    image: 'https://via.placeholder.com/300x400.png?text=Jessica+Dobrev',
    description: 'Expert in payment processing queries.',
  },
  {
    name: 'Orlando Diggs',
    role: 'Customer Success Lead',
    image: 'https://via.placeholder.com/300x400.png?text=Orlando+Diggs',
    description: 'Leads the customer success team with passion.',
  },
];

const TeamCarousel = () => {
  const [members] = useState([...teamMembers, ...teamMembers]); // Duplicate for seamless loop
  const carouselRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrameId;

    const speed = 1; // Adjust scroll speed (higher = faster)

    const scrollCarousel = () => {
      if (carousel) {
        // Scroll to the left
        carousel.scrollLeft += speed;

        // Reset scroll to beginning once it reaches half (because it's duplicated)
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollCarousel);
    };

    animationFrameId = requestAnimationFrame(scrollCarousel);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className="w-full py-18"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
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

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden"
        style={{ paddingLeft: '6rem', paddingRight: '6rem' }} // Add left and right padding
      >
        <div
          ref={carouselRef}
          className="flex gap-6"
          style={{
            scrollBehavior: 'smooth',
            cursor: 'grab',
            overflowX: 'hidden', // Hide the scrollbar
          }}
        >
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              className="relative min-w-[220px] h-[340px] rounded-xl overflow-hidden border shadow-md flex-shrink-0"
              style={{ borderColor: colors.border }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0.9, scale: 1 }}
              animate={{
                opacity: hovered === idx ? 1 : 0.9,
                scale: hovered === idx ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  hovered === idx ? 'grayscale-0' : 'grayscale'
                }`}
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-4 space-y-2 transition-opacity duration-300 ${
                  hovered === idx ? 'opacity-100' : 'opacity-0'
                }`}
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
      </div>
    </div>
  );
};

export default TeamCarousel;