import React from 'react';

const RetroGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute bottom-0 left-0 w-full h-[60vh] perspective-[800px]"
        style={{ perspectiveOrigin: '50% 100%' }}
      >
        <div 
          className="absolute w-[200vw] h-[200vh] bottom-0 left-[-50vw] border-t border-[#ff00ff]/30 mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.4) 2px, transparent 2px),
              linear-gradient(to top, rgba(255, 255, 255, 0.4) 2px, transparent 2px)
            `,
            backgroundSize: '80px 80px',
            transform: 'rotateX(75deg) translateZ(0)',
            transformOrigin: 'bottom center',
            animation: 'gridScroll 3s linear infinite',
            willChange: 'transform'
          }}
        />
        {/* Glow overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-black/80 to-black pointer-events-none" />
      </div>
      
      <style>{`
        @keyframes gridScroll {
          0% { transform: rotateX(75deg) translateY(0) translateZ(0); }
          100% { transform: rotateX(75deg) translateY(80px) translateZ(0); }
        }
      `}</style>
    </div>
  );
};

export default RetroGrid;
