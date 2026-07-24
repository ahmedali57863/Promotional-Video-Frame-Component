import React from 'react';

const Starfield = () => {
  // Generate 150 stars with 3D zooming effect
  const stars = Array.from({ length: 150 }).map((_, i) => {
    // Distribute randomly from center
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    
    const duration = Math.random() * 2 + 1.5;
    const delay = Math.random() * -5;
    
    return { id: i, x, y, duration, delay };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center mix-blend-screen bg-black/10">
      <div className="relative w-full h-full perspective-[800px] flex items-center justify-center">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]"
            style={{
              left: `calc(50% + ${star.x}vw)`,
              top: `calc(50% + ${star.y}vh)`,
              width: '2px',
              height: '2px',
              animation: `zoomStar ${star.duration}s ease-in ${star.delay}s infinite`,
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes zoomStar {
          0% {
            transform: translateZ(-1000px) scale(0.1);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          100% {
            transform: translateZ(800px) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Starfield;
