import { useRef, useState, useEffect } from 'react';

interface TiltOptions {
  maxRotation?: number;
  perspective?: number;
  scale?: number;
}

export const useTilt = <T extends HTMLElement>(options: TiltOptions = {}) => {
  const { maxRotation = 15, perspective = 1000, scale = 1 } = options;
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<T>) => {
    const el = elementRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * maxRotation;
    const rotateY = ((centerX - x) / centerX) * maxRotation;

    el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateY(${isVisible ? 0 : 30}px)`;
  };

  const handleMouseLeave = () => {
    const el = elementRef.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1) translateY(${isVisible ? 0 : 30}px)`;
  };

  return {
    elementRef,
    isVisible,
    handleMouseMove,
    handleMouseLeave,
    style: {
      transform: `translateY(${isVisible ? 0 : 30}px)`,
      opacity: isVisible ? 1 : 0,
    }
  };
};
