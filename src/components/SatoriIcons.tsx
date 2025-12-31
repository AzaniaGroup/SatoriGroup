import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ChefIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8.5 2C8.5 1.17 9.17 0.5 10 0.5C10.83 0.5 11.5 1.17 11.5 2C11.5 2.83 10.83 3.5 10 3.5C9.17 3.5 8.5 2.83 8.5 2Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12.5 2C12.5 1.17 13.17 0.5 14 0.5C14.83 0.5 15.5 1.17 15.5 2C15.5 2.83 14.83 3.5 14 3.5C13.17 3.5 12.5 2.83 12.5 2Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6.5 4C6.5 3.17 7.17 2.5 8 2.5C8.83 2.5 9.5 3.17 9.5 4C9.5 4.83 8.83 5.5 8 5.5C7.17 5.5 6.5 4.83 6.5 4Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 8H18C18.55 8 19 8.45 19 9V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V9C5 8.45 5.45 8 6 8Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 14H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 17H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const PoolIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 15C4 15 4 17 6 17C8 17 8 15 10 15C12 15 12 17 14 17C16 17 16 15 18 15C20 15 20 17 22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 19C4 19 4 21 6 21C8 21 8 19 10 19C12 19 12 21 14 21C16 21 16 19 18 19C20 19 20 21 22 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 7L18 5L14 9L10 5L6 9L2 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LeafIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C16.97 2 21 6.03 21 11C21 15.97 16.97 20 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 20C12 20 7 15 7 11C7 6.03 11.03 2 16 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 11L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const BookIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 19.5C4 18.12 5.12 17 6.5 17H20V4H6.5C5.12 4 4 5.12 4 6.5V19.5Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 17V21H6.5C5.12 21 4 19.88 4 18.5S5.12 16 6.5 16H20" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const MeditationIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 14C9 14 6.5 16.5 6.5 19.5H17.5C17.5 16.5 15 14 12 14Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 16L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 16L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
);

export const CityIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 21V9L12 2L19 9V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="7" y="17" width="2" height="4" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="15" y="17" width="2" height="4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="8" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 8V6C7 4.9 7.9 4 9 4H15C16.1 4 17 4.9 17 6V8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const BambooIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 18H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 18H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="6" r="1" fill="currentColor"/>
    <circle cx="16" cy="6" r="1" fill="currentColor"/>
    <circle cx="8" cy="12" r="1" fill="currentColor"/>
    <circle cx="16" cy="12" r="1" fill="currentColor"/>
    <circle cx="8" cy="18" r="1" fill="currentColor"/>
    <circle cx="16" cy="18" r="1" fill="currentColor"/>
  </svg>
);

export const SparkleIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3L13.5 7.5L18 9L13.5 10.5L12 15L10.5 10.5L6 9L10.5 7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M19 3L19.5 4.5L21 5L19.5 5.5L19 7L18.5 5.5L17 5L18.5 4.5L19 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M19 17L19.5 18.5L21 19L19.5 19.5L19 21L18.5 19.5L17 19L18.5 18.5L19 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const ChairIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 12V8C6 6.9 6.9 6 8 6H16C17.1 6 18 6.9 18 8V12" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 12H19C19.55 12 20 12.45 20 13V15C20 15.55 19.55 16 19 16H5C4.45 16 4 15.55 4 15V13C4 12.45 4.45 12 5 12Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const DoorIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="16" cy="12" r="1" fill="currentColor"/>
    <path d="M9 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 10V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 14V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const FireIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C12 10 8 12 8 16C8 18.21 9.79 20 12 20C14.21 20 16 18.21 16 16C16 12 12 10 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 6C12 8 10 9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 9 12 8 12 6Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 20H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const CigarIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="10" width="18" height="4" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="21" cy="10" r="1" stroke="currentColor" strokeWidth="1"/>
    <circle cx="21" cy="14" r="1" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

export const HandshakeIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 4L10 2L8 4L4 8L2 10L4 12L8 16L12 20L16 16L20 12L22 10L20 8L16 4L14 2L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 12L12 8L16 12L12 16L8 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 8V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 20V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const TempleIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 21V12L12 4L20 12V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 21V16H16V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="1" fill="currentColor"/>
    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const GrowthIcon: React.FC<IconProps> = ({ className = "", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12L12 8L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 14L12 16L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);