import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FloatingParticles } from '../components/FloatingParticles';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F6] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingParticles />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-50/10 to-orange-100/20 pointer-events-none z-1" />
      <NavBar />
      <div className="flex-1 w-full max-w-7xl mx-auto relative z-10">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout; 