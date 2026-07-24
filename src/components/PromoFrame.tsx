import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface PromoFrameProps {
  onBgChange?: (style: { background: string }) => void;
}

export default function PromoFrame({ onBgChange }: PromoFrameProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [color1, setColor1] = useState("#00856F");
  const [color2, setColor2] = useState("");

  // Safely update the muted property directly on the DOM node 
  // to avoid autoplay interruptions from React re-renders.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Update background color based on user input
  useEffect(() => {
    if (onBgChange) {
      if (color1 && color2) {
        onBgChange({ background: `linear-gradient(135deg, ${color1}, ${color2})` });
      } else if (color1) {
        onBgChange({ background: color1 });
      }
    }
  }, [color1, color2, onBgChange]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative z-10 pt-10 pb-20">
      
      {/* Title Section */}
      <div className="flex flex-col items-center text-center mb-10 px-4 z-20">
        <img 
          src="/OGDCL-Logo.png" 
          alt="OGDCL Logo" 
          className="h-28 mb-6 object-contain filter drop-shadow-xl"
        />
        <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg leading-tight">
          Pioneering Energy Frontiers
        </h1>
        <p className="text-2xl md:text-4xl font-bold mt-2 text-[#7bf1d6] drop-shadow-md">
          Explore. Learn. Grow.
        </p>
      </div>

      {/* 3D Animated Card */}
      <div 
        className="relative flex justify-center w-full"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          animate={{
            rotateX: [10, 2, 10, 10, 10, 10],
            translateY: [0, -15, 0, 0, 0, 0],
            rotateY: [0, 0, 0, -3, 3, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="max-w-6xl w-[90%] md:w-[80%] bg-[#1a1a1a] rounded-[2rem] p-4 md:p-6 shadow-[0_40px_100px_rgba(0,0,0,0.6),_0_0_40px_rgba(0,133,111,0.5)] border-t border-white/20"
        >
          <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-inner border border-white/10 aspect-video">
            <video 
              ref={videoRef}
              src="/ogdcl_scroll.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
            
            {/* Glossy Overlay for screen glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />

          </div>
        </motion.div>
      </div>

      {/* Background Color Controls */}
      <div className="fixed bottom-24 right-8 z-50 flex flex-col gap-2 bg-black/40 p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <div className="text-white text-xs font-semibold mb-1 opacity-80 text-center">Customize Background</div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="#Hex 1" 
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            className="w-20 bg-black/50 border border-white/20 rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-white/50 transition-colors"
          />
          <input 
            type="text" 
            placeholder="#Hex 2 (Opt)" 
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            className="w-24 bg-black/50 border border-white/20 rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-white/50 transition-colors"
          />
        </div>
      </div>

      {/* Mute/Unmute Control Button Fixed to Background */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all duration-300 shadow-xl cursor-pointer"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          // Speaker X Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        ) : (
          // Speaker High Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
        )}
      </button>
    </div>
  );
}
