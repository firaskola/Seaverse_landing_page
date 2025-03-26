import React from 'react';
import HeroSection from '../components/HeroSection';
import OurMission from '../components/OurMission';
import BlogSection from '../components/BlogSection';
import CurrentProjects from '../components/CurrentProjects';
import WhyUs from '../components/WhyUs';
import ContactUs from '../components/ContactUs';
import Testimonial from '../components/Testimonail';
import BusinessAndCollaboration from '../components/Colaborations';
import ProductsSection from '../components/ProductsSection';
import Technologies from '../components/Technologies';



const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurMission />
      <BlogSection />
      
      <CurrentProjects />
      <WhyUs />
      <Technologies />
      <BusinessAndCollaboration />
      <ProductsSection />
      
      <Testimonial />
      
      <ContactUs />
     
    </div>
  );
};

export default Home;
