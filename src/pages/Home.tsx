import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../features/home/HeroSection';
import AboutSection from '../features/home/AboutSection';
import JourneyTimeline from '../features/home/JourneyTimeline';
import ProjectsSection from '../features/home/ProjectsSection';
import BlogSection from '../features/home/BlogSection';
import ContactSection from '../features/home/ContactSection';

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .tl-item').forEach(el => io.observe(el));

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    return () => io.disconnect();
  }, [hash]);

  return (
    <>
      <div className="app-bloom app-bloom-warm" />
      <div className="app-bloom app-bloom-cool" />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <JourneyTimeline />
      <ProjectsSection />
      <BlogSection />
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};

export default Home;