import React from 'react';
import HeroSection from '../features/home/HeroSection';
import FeaturedProjects from '../features/home/FeaturedProjects';
import AboutPreview from '../features/home/AboutPreview';
import ContactForm from '../features/home/ContactForm';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <ContactForm />
    </main>
  );
};

export default Home; 