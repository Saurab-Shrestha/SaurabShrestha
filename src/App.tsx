import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SkeletonLoader from './components/SkeletonLoader';

const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const Blog = lazy(() => import('./pages/Blog'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

const ResumeRedirect: React.FC = () => {
  React.useEffect(() => {
    window.location.href = '/assets/Saurab-Shrestha-CV.pdf';
  }, []);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={
          <div className="pt-32 pb-24 px-4 container mx-auto max-w-5xl">
             <SkeletonLoader type="card" count={2} />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/resume" element={<ResumeRedirect />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;