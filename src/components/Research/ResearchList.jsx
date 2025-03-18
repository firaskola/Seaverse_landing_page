// src/components/Research/ResearchList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../ui/card'; // Relative path
import { motion } from 'framer-motion';
import researchData from '../../data'; // Relative path

const ResearchList = () => {
  const navigate = useNavigate();

  const handleClick = (research) => {
    navigate(`/research/${research.id}`, { state: { research } });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {researchData.map((research) => (
        <motion.div key={research.id} whileHover={{ scale: 1.05 }}>
          <Card
            className="cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl"
            onClick={() => handleClick(research)}
          >
            <img src={research.image} alt={research.title} className="w-full h-40 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{research.title}</h2>
              <p className="text-gray-600 line-clamp-2">{research.summary}</p>
              <button className="mt-2 text-blue-600 hover:underline">
                Read More
              </button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ResearchList;