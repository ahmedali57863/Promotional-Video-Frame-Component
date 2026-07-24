import React from 'react';

const PixelCloud = ({ opacity = 1 }) => (
  <svg 
    viewBox="0 0 16 10" 
    xmlns="http://www.w3.org/2000/svg" 
    shapeRendering="crispEdges"
    className="w-full h-full drop-shadow-lg"
    style={{ opacity }}
  >
    {/* Using white color with blend modes so it matches the background theme perfectly */}
    <path fill="#ffffff" d="M5 1h4v1h3v1h2v1h1v4h-1v1h-12v-1h-1v-4h1v-1h2v-1h1v-1z" />
    <path 
      fill="#ffffff" 
      d="M2 8h12v1h-12zM3 7h10v1h-10z" 
      style={{ opacity: 0.7 }} 
    />
  </svg>
);

const CLOUDS = [
  // Row 1 — top of viewport
  { id: 1,  top: '2%',   size: 140, duration: 50, delay: -10,  opacity: 0.45, dir: 'ltr' },
  { id: 2,  top: '6%',   size: 80,  duration: 65, delay: -45,  opacity: 0.35, dir: 'rtl' },
  { id: 3,  top: '10%',  size: 100, duration: 45, delay: -22,  opacity: 0.40, dir: 'ltr' },

  // Row 2
  { id: 4,  top: '16%',  size: 120, duration: 55, delay: -30,  opacity: 0.40, dir: 'rtl' },
  { id: 5,  top: '20%',  size: 60,  duration: 70, delay: -60,  opacity: 0.35, dir: 'ltr' },

  // Row 3
  { id: 7,  top: '30%',  size: 90,  duration: 48, delay: -5,   opacity: 0.40, dir: 'ltr' },
  { id: 8,  top: '34%',  size: 110, duration: 58, delay: -40,  opacity: 0.35, dir: 'rtl' },
  { id: 9,  top: '38%',  size: 70,  duration: 42, delay: -28,  opacity: 0.40, dir: 'ltr' },

  // Row 4 — middle
  { id: 10, top: '44%',  size: 130, duration: 52, delay: -50,  opacity: 0.45, dir: 'rtl' },
  { id: 11, top: '48%',  size: 85,  duration: 62, delay: -18,  opacity: 0.35, dir: 'ltr' },

  // Row 5
  { id: 13, top: '58%',  size: 75,  duration: 56, delay: -8,   opacity: 0.35, dir: 'ltr' },
  { id: 14, top: '62%',  size: 140, duration: 38, delay: -25,  opacity: 0.45, dir: 'rtl' },

  // Row 6
  { id: 16, top: '72%',  size: 115, duration: 44, delay: -42,  opacity: 0.40, dir: 'rtl' },
  { id: 17, top: '76%',  size: 95,  duration: 54, delay: -12,  opacity: 0.35, dir: 'ltr' },
  { id: 18, top: '80%',  size: 65,  duration: 60, delay: -32,  opacity: 0.40, dir: 'rtl' },

  // Row 7 — bottom
  { id: 19, top: '86%',  size: 130, duration: 42, delay: -2,   opacity: 0.45, dir: 'ltr' },
  { id: 20, top: '90%',  size: 80,  duration: 66, delay: -48,  opacity: 0.35, dir: 'rtl' },
  { id: 21, top: '94%',  size: 105, duration: 48, delay: -20,  opacity: 0.40, dir: 'ltr' },

  // Extra scattered clouds for density
  { id: 22, top: '14%',  size: 50,  duration: 72, delay: -65,  opacity: 0.30, dir: 'ltr' },
  { id: 24, top: '70%',  size: 45,  duration: 78, delay: -16,  opacity: 0.30, dir: 'ltr' },
];

const FloatingClouds = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden mix-blend-overlay"
      style={{ zIndex: 1 }}
    >
      {CLOUDS.map((cloud, index) => (
        <div
          key={cloud.id}
          className={index % 2 === 0 ? "hidden md:block" : ""}
          style={{
            position: 'absolute',
            top: cloud.top,
            width: `${cloud.size}px`,
            height: `${Math.round(cloud.size * 0.625)}px`,
            animation: `${cloud.dir === 'ltr' ? 'cloudLTR' : 'cloudRTL'} ${cloud.duration}s linear ${cloud.delay}s infinite`,
            willChange: 'transform',
          }}
        >
          <PixelCloud opacity={cloud.opacity} />
        </div>
      ))}

      <style>{`
        @keyframes cloudLTR {
          0%   { transform: translateX(-200px); }
          100% { transform: translateX(100vw); }
        }
        @keyframes cloudRTL {
          0%   { transform: translateX(calc(100vw + 200px)); }
          100% { transform: translateX(-200px); }
        }
      `}</style>
    </div>
  );
};

export default FloatingClouds;
