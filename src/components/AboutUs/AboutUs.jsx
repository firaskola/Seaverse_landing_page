import React from 'react';
import { colors } from '../../utils/color';

const AboutUsSection = () => {
  return (
    <div className="w-full py-16 flex flex-col items-center relative">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, ${colors.backgroundSecondary} 50%, ${colors.background} 50%)`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-8">Our Story</h2>

        {/* Image */}
        <div className="relative w-[80%] max-w-3xl">
          <img
            src="/about-us.jpg" // <-- replace with your image path
            alt="About us team"
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>

        {/* Description */}
        <div
          className="bg-white shadow-md rounded-lg p-6 mt-8 max-w-3xl mx-4 text-center"
          style={{ backgroundColor: colors.background }}
        >
          <p className="text-gray-700 leading-relaxed">
            We&apos;re a fully distributed team of 85 people living and working in 15 countries
            around the world. And we&apos;re working to build the best products to help our customers
            build their brands and grow their businesses on social media.
            <br />
            <br />
            We&apos;ve always aimed to do things a little differently at Buffer. Since the early
            days, we&apos;ve had a focus on building one of the most unique and fulfilling
            workplaces by rethinking a lot of traditional practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;