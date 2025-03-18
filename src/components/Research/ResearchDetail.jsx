// src/components/Research/ResearchDetail.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const ResearchDetail = () => {
  const location = useLocation();
  const research = location.state?.research;

  if (!research) {
    return <div>Research not found!</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{research.title}</h1>
      <img src={research.image} alt={research.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-gray-700">{research.details}</p>
    </div>
  );
};

export default ResearchDetail;