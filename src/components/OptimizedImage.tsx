import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  circle?: boolean;
  shadow?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  lazy = true,
  onLoad,
  onError,
  width,
  height,
  rounded = false,
  circle = false,
  shadow = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
    if (onError) onError();
  };

  const combinedClassName = `
    img-responsive
    ${rounded ? 'img-rounded' : ''}
    ${circle ? 'img-circle' : ''}
    ${shadow ? 'img-shadow' : ''}
    ${lazy ? 'lazy-load' : ''}
    ${isLoaded ? 'loaded' : ''}
    ${className}
  `.trim();

  // Fallback content for error state
  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center ${combinedClassName}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={combinedClassName}
      onLoad={handleLoad}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      style={{ width, height }}
    />
  );
};

export default OptimizedImage;