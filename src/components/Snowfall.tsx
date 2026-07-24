import React from 'react';

const Snowfall = () => {
  // Generate 100 random snowflakes
  const flakes = Array.from({ length: 100 }).map((_, i) => {
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 20;
    const delay = Math.random() * -30;
    const size = Math.random() * 4 + 2;
    const opacity = Math.random() * 0.5 + 0.2;
    
    return { id: i, left, duration, delay, size, opacity };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ mixBlendMode: 'screen' }}>
      {flakes.map(flake => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white blur-[1px]"
          style={{
            left: `${flake.left}%`,
            top: `-5%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animation: `snowFall ${flake.duration}s linear ${flake.delay}s infinite`,
            willChange: 'transform'
          }}
        />
      ))}
      <style>{`
        @keyframes snowFall {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          100% {
            transform: translate3d(-15vw, 110vh, 0) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Snowfall;
