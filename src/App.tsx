import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-3xl font-bold text-gray-400">
    {title} (Coming Soon)
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Placeholder title="Blog" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
