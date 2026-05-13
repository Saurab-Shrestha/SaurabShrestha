import React, { useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const scrollProgRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate refs
  const mousePos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    // 1. Cursor handling
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.mx = e.clientX;
      mousePos.current.my = e.clientY;
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    const animateCursor = () => {
      const pos = mousePos.current;
      pos.rx += (pos.mx - pos.rx) * 0.12;
      pos.ry += (pos.my - pos.ry) * 0.12;
      
      if (cursorDotRef.current && cursorRingRef.current) {
        cursorDotRef.current.style.left = pos.mx + 'px';
        cursorDotRef.current.style.top = pos.my + 'px';
        cursorRingRef.current.style.left = pos.rx + 'px';
        cursorRingRef.current.style.top = pos.ry + 'px';
      }
      animationFrameId.current = requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // 2. Scroll Progress
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollY / docHeight : 0;
      if (scrollProgRef.current) {
        scrollProgRef.current.style.transform = `scaleX(${pct})`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 3. Scroll Reveal initialization
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    const observerTarget = document.querySelectorAll('.reveal, .reveal-left, .tl-item');
    observerTarget.forEach(el => io.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
    };
  }, [children]); // Re-observe when children change

  return (
    <div className="portfolio-2026 min-h-screen flex flex-col">
      {/* CURSOR */}
      <div id="cursor-dot" ref={cursorDotRef}></div>
      <div id="cursor-ring" ref={cursorRingRef}></div>

      {/* SCROLL PROGRESS */}
      <div id="scroll-progress" ref={scrollProgRef}></div>

      <NavBar />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;