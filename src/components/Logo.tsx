
import React from 'react';

const Logo = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter A */}
        <path
          d="M20 80 L35 40 L50 80 M28 65 L42 65"
          stroke="url(#gradient1)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Connection nodes */}
        <circle cx="65" cy="45" r="3" fill="url(#gradient2)" className="animate-pulse-glow" />
        <circle cx="75" cy="55" r="2.5" fill="url(#gradient2)" className="animate-pulse-glow" />
        <circle cx="80" cy="35" r="2" fill="url(#gradient2)" className="animate-pulse-glow" />
        
        {/* Connection lines */}
        <path
          d="M50 60 L65 45 M65 45 L75 55 M65 45 L80 35"
          stroke="url(#gradient2)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#764ba2" />
            <stop offset="100%" stopColor="#667eea" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
