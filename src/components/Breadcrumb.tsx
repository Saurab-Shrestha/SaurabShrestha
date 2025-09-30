import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();
  
  // Default breadcrumb items based on current location
  const defaultItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
  ];
  
  // Add current page based on location
  const currentPageName = location.pathname
    .substring(1)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    || 'Home';
  
  if (location.pathname !== '/') {
    defaultItems.push({ 
      name: currentPageName, 
      path: location.pathname 
    });
  }
  
  const breadcrumbItems = items || defaultItems;

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="flex items-center">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index < breadcrumbItems.length - 1 ? (
              <>
                <Link 
                  to={item.path} 
                  className="breadcrumb-link"
                >
                  {item.name}
                </Link>
                <ChevronRight className="breadcrumb-separator" size={16} />
              </>
            ) : (
              <span className="breadcrumb-current" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;