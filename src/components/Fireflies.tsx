import React from 'react';

const Fireflies = () => {
  const flies = Array.from({ length: 40 }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const durationX = Math.random() * 10 + 10;
    const durationY = Math.random() * 10 + 10;
    const delay = Math.random() * -20;
    const size = Math.random() * 6 + 3;
    
    return { id: i, left, top, durationX, durationY, delay, size };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 mix-blend-screen opacity-80">
      {flies.map(fly => (
        <div
          key={fly.id}
          className="absolute bg-[#ffffbb] rounded-full blur-[2px] shadow-[0_0_15px_rgba(255,255,180,0.8)]"
          style={{
            left: `${fly.left}%`,
            top: `${fly.top}%`,
            width: `${fly.size}px`,
            height: `${fly.size}px`,
            animation: `
              flyX ${fly.durationX}s ease-in-out ${fly.delay}s infinite alternate,
              flyY ${fly.durationY}s ease-in-out ${fly.delay}s infinite alternate,
              glow ${Math.random() * 2 + 2}s ease-in-out ${fly.delay}s infinite alternate
            `,
            willChange: 'transform, opacity'
          }}
        />
      ))}
      <style>{`
        @keyframes flyX {
          0% { transform: translateX(-50px); }
          100% { transform: translateX(50px); }
        }
        @keyframes flyY {
          0% { transform: translateY(-50px); }
          100% { transform: translateY(50px); }
        }
        @keyframes glow {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;
