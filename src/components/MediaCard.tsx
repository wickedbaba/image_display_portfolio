import React, { useState } from 'react';

interface MediaCardProps {
  id: string;
  type: 'image' | 'video';
  src: string;
  aspectRatio?: number;
  prompt?: string;
  onImageClick: () => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ 
  id, 
  type, 
  src, 
  aspectRatio = 1.5,
  onImageClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onImageClick}
      style={{ aspectRatio }}
    >
      {/* Light mode glow - Orange gradient */}
      <div 
        className={`absolute -inset-8 rounded-3xl transition-all duration-700 pointer-events-none dark:hidden ${
          isHovered 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(251, 146, 60, 0.4) 0%,
              rgba(249, 115, 22, 0.3) 25%,
              rgba(234, 88, 12, 0.2) 50%,
              rgba(194, 65, 12, 0.1) 75%,
              transparent 100%
            )
          `,
          filter: 'blur(12px)',
          animation: isHovered ? 'pulseGlow 3s ease-in-out infinite' : 'none',
        }}
      />
      
      {/* Dark mode glow - Purple gradient */}
      <div 
        className={`absolute -inset-8 rounded-3xl transition-all duration-700 pointer-events-none hidden dark:block ${
          isHovered 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(147, 51, 234, 0.4) 0%,
              rgba(168, 85, 247, 0.3) 25%,
              rgba(196, 181, 253, 0.2) 50%,
              rgba(147, 51, 234, 0.1) 75%,
              transparent 100%
            )
          `,
          filter: 'blur(12px)',
          animation: isHovered ? 'pulseGlow 3s ease-in-out infinite' : 'none',
        }}
      />
      
      {/* Secondary glow layer for depth - Light mode */}
      <div 
        className={`absolute -inset-6 rounded-3xl transition-all duration-500 pointer-events-none dark:hidden ${
          isHovered 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(249, 115, 22, 0.3) 0%,
              rgba(234, 88, 12, 0.2) 40%,
              rgba(194, 65, 12, 0.1) 70%,
              transparent 100%
            )
          `,
          filter: 'blur(8px)',
        }}
      />
      
      {/* Secondary glow layer for depth - Dark mode */}
      <div 
        className={`absolute -inset-6 rounded-3xl transition-all duration-500 pointer-events-none hidden dark:block ${
          isHovered 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(168, 85, 247, 0.3) 0%,
              rgba(196, 181, 253, 0.2) 40%,
              rgba(147, 51, 234, 0.1) 70%,
              transparent 100%
            )
          `,
          filter: 'blur(8px)',
        }}
      />
      
      {/* Subtle border glow - Light mode */}
      <div 
        className={`absolute -inset-1 rounded-2xl transition-all duration-500 pointer-events-none dark:hidden ${
          isHovered 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
        style={{
          background: `
            linear-gradient(
              45deg,
              rgba(251, 146, 60, 0.6),
              rgba(249, 115, 22, 0.4),
              rgba(234, 88, 12, 0.6),
              rgba(249, 115, 22, 0.4)
            )
          `,
          filter: 'blur(2px)',
        }}
      />
      
      {/* Subtle border glow - Dark mode */}
      <div 
        className={`absolute -inset-1 rounded-2xl transition-all duration-500 pointer-events-none hidden dark:block ${
          isHovered 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
        style={{
          background: `
            linear-gradient(
              45deg,
              rgba(147, 51, 234, 0.6),
              rgba(168, 85, 247, 0.4),
              rgba(196, 181, 253, 0.6),
              rgba(168, 85, 247, 0.4)
            )
          `,
          filter: 'blur(2px)',
        }}
      />
      
      {/* Main image container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
        <img 
          src={src} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MediaCard;