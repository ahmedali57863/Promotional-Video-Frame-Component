import React from 'react';

const MatrixRain = () => {
  const columns = Array.from({ length: 60 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 mix-blend-color-dodge opacity-60">
      <div className="flex justify-between w-full h-[150vh] -mt-[25vh]">
        {columns.map((_, i) => {
          // Generate a string of random characters
          const chars = Array.from({ length: 25 }).map(() => 
            String.fromCharCode(0x30A0 + Math.random() * 96)
          ).join('\n');

          const delay = Math.random() * -20;
          const duration = Math.random() * 5 + 4;
          const fontSize = Math.random() * 10 + 10;
          const opacity = Math.random() * 0.5 + 0.3;

          return (
            <div
              key={i}
              className="text-[#fff] whitespace-pre flex-col text-center font-mono leading-none drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
              style={{
                fontSize: `${fontSize}px`,
                opacity: opacity,
                animation: `matrixFall ${duration}s linear ${delay}s infinite`,
                willChange: 'transform'
              }}
            >
              {chars}
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

export default MatrixRain;
