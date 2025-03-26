import React from 'react';
import { useLocation } from 'react-router-dom';
import TeamSection from '../TeamSection'; // Import the TeamSection component
import { colors } from '../../utils/color'; // Import color scheme

const ResearchDetail = () => {
  const location = useLocation();
  const research = location.state?.research;

  if (!research) {
    return <div>Research not found!</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto" style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* Research Details */}
      <h1 className="text-4xl font-bold mb-6" style={{ color: colors.primary }}>
        {research.title}
      </h1>

      <img
        src={research.image}
        alt={research.title}
        className="w-full h-96 object-cover rounded-lg mb-8"
        style={{ border: `1px solid ${colors.border}` }}
      />

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4" style={{ color: colors.secondary }}>Project Overview</h2>
        <p>{research.overview}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: colors.secondary }}>Project Details</h2>
        <p>{research.details}</p>

        {/* Render Team Members dynamically from the research data */}
        {research.teamMembers && research.teamMembers.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: colors.secondary }}>Team Members</h2>
            <TeamSection teamMembers={research.teamMembers} />
          </>
        )}
      </div>
    </div>
  );
};

export default ResearchDetail;
