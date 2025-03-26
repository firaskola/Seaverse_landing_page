import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../ui/card'; 
import { motion } from 'framer-motion';
import researchData from '../../data'; 
import { colors } from '../../utils/color'; 

const ResearchList = () => {
  const navigate = useNavigate();

  const handleClick = (research) => {
    navigate(`/research/${research.id}`, { state: { research } });
  };

  return (
    <div className="space-y-6 p-8" style={{ backgroundColor: colors.background, minHeight: '100vh' }}>
      <h1 className="text-4xl font-bold mb-8" style={{ color: colors.primary }}>Research Projects</h1>
      
      {researchData.map((research, index) => (
        <div key={research.id}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform"
              style={{
                backgroundColor: colors.backgroundSecondary,
                border: `1px solid ${colors.border}`,
                color: colors.text,
              }}
              onClick={() => handleClick(research)}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <img
                  src={research.image}
                  alt={research.title}
                  className="w-full md:w-64 h-48 md:h-auto object-cover"
                  style={{ borderRight: `1px solid ${colors.border}` }}
                />

                {/* Content */}
                <CardContent className="flex-1 p-6">
                  <h2 className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>
                    {research.title}
                  </h2>
                  <p className="text-gray-300 line-clamp-3">{research.overview}</p>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Thin Line Separator */}
          {index < researchData.length - 1 && (
            <div
              className="w-full my-4"
              style={{ borderBottom: `1px solid ${colors.primary}` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResearchList;
