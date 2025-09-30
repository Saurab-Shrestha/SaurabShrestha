import React from 'react';

interface SkeletonLoaderProps {
  type?: 'text' | 'card' | 'image' | 'profile' | 'project';
  className?: string;
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  type = 'text', 
  className = '',
  count = 1 
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'text':
        return (
          <div className={`skeleton ${className}`}>
            <div className="skeleton-text skeleton-text-lg mb-3"></div>
            <div className="skeleton-text mb-2"></div>
            <div className="skeleton-text mb-2"></div>
            <div className="skeleton-text skeleton-text-sm"></div>
          </div>
        );
      
      case 'card':
        return (
          <div className={`skeleton ${className}`}>
            <div className="h-48 rounded-t-2xl mb-4"></div>
            <div className="p-6">
              <div className="skeleton-text skeleton-text-lg mb-3"></div>
              <div className="skeleton-text mb-2"></div>
              <div className="skeleton-text mb-4"></div>
              <div className="flex gap-2 mb-6">
                <div className="skeleton-text skeleton-text-sm w-16 h-6 rounded-md"></div>
                <div className="skeleton-text skeleton-text-sm w-16 h-6 rounded-md"></div>
                <div className="skeleton-text skeleton-text-sm w-16 h-6 rounded-md"></div>
              </div>
              <div className="flex gap-3">
                <div className="skeleton-text skeleton-text-sm flex-1 h-10 rounded-lg"></div>
                <div className="skeleton-text skeleton-text-sm flex-1 h-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div className={`skeleton rounded-full ${className}`}></div>
        );
      
      case 'profile':
        return (
          <div className={`skeleton rounded-full w-48 h-48 md:w-64 md:h-64 ${className}`}></div>
        );
      
      case 'project':
        return (
          <div className={`skeleton rounded-2xl ${className}`}>
            <div className="h-48 rounded-t-2xl mb-4"></div>
            <div className="p-6">
              <div className="skeleton-text skeleton-text-lg mb-3 w-3/4"></div>
              <div className="skeleton-text mb-2"></div>
              <div className="skeleton-text mb-2"></div>
              <div className="skeleton-text mb-6"></div>
              <div className="flex gap-2 mb-6">
                <div className="skeleton-text skeleton-text-sm w-12 h-6 rounded-md"></div>
                <div className="skeleton-text skeleton-text-sm w-16 h-6 rounded-md"></div>
              </div>
              <div className="flex gap-3">
                <div className="skeleton-text skeleton-text-sm flex-1 h-10 rounded-lg"></div>
                <div className="skeleton-text skeleton-text-sm flex-1 h-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className={`skeleton ${className}`}></div>
        );
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="mb-4 last:mb-0">
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;