import React from 'react';

/**
 * Rainbow colors configuration (outermost to innermost)
 * Path 5 (outermost): #96CEB4 (green)
 * Path 4: #45B7D1 (blue)
 * Path 3: #4ECDC4 (teal)
 * Path 2: #F3A20F (orange)
 * Path 1 (innermost): #FF6B6B (red/coral)
 */
const RAINBOW_PATHS = [
  { id: 'path-5', color: '#96CEB4', baseX: 6 },
  { id: 'path-4', color: '#45B7D1', baseX: 14 },
  { id: 'path-3', color: '#4ECDC4', baseX: 22 },
  { id: 'path-2', color: '#F3A20F', baseX: 30 },
  { id: 'path-1', color: '#FF6B6B', baseX: 38 },
];

const RainbowSVG = () => (
  <svg
    viewBox="0 0 60 1000"
    preserveAspectRatio="none"
    className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {RAINBOW_PATHS.map(({ id, color, baseX }) => {
      // Vertical at top/bottom, curves inward by +14px around middle (y=500)
      const d = `M ${baseX} 0 C ${baseX} 250, ${baseX + 14} 350, ${baseX + 14} 500 C ${baseX + 14} 650, ${baseX} 750, ${baseX} 1000`;
      return (
        <path
          key={id}
          d={d}
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          className="animate-pulse"
        />
      );
    })}
  </svg>
);

export const RainbowBorder = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-[60px] z-0 pointer-events-none hidden md:block">
        <RainbowSVG />
      </div>
      <div className="fixed top-0 right-0 h-screen w-[60px] z-0 pointer-events-none hidden md:block -scale-x-100">
        <RainbowSVG />
      </div>
    </>
  );
};

export default RainbowBorder;
