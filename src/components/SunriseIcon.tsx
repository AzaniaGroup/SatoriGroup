import React from 'react';

interface SunriseIconProps {
  className?: string;
  size?: number;
}

export const SunriseIcon: React.FC<SunriseIconProps> = ({ 
  className = "", 
  size = 24 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Horizon line */}
      <line x1="1" y1="18" x2="23" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Sun */}
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      
      {/* Sun rays */}
      <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="6" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="17.66" y1="6.34" x2="16.24" y2="7.76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7.76" y1="7.76" x2="6.34" y2="6.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Mountains */}
      <path d="M8 18L10 14L12 16L14 12L16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
};