"use client";

import { useRef, ReactNode, MouseEventHandler } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  size?: number;
  spotlightColor?: string; // Keep this for backward compatibility or direct color set
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const SpotlightCard = ({ 
  children, 
  className = "", 
  from, 
  via, 
  to,
  size = 400,
  spotlightColor,
  onClick
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--x", `${x}px`);
    divRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`relative w-full overflow-hidden rounded-2xl bg-gray-900 text-gray-200 shadow-lg ${className}`}
      style={
        {
          '--x': '0px',
          '--y': '0px',
          '--size': `${size}px`,
          '--spotlight-color': spotlightColor || 'rgba(128, 80, 255, 0.1)',
          '--from-color': from || 'rgba(101, 10, 255, 0.4)',
          '--via-color': via || 'rgba(112, 10, 255, 0.2)',
          '--to-color': to || 'rgba(128, 80, 255, 0.1)',
        } as React.CSSProperties
      }
    >
      {children}
      <div 
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `
            radial-gradient(
              var(--size) circle at var(--x) var(--y),
              var(--from-color),
              var(--via-color),
              var(--to-color)
            )
          `,
        }} 
      />
    </div>
  );
};

export default SpotlightCard; 