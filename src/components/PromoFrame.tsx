import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface PromoFrameProps {
  variant?: string;
  branding?: {
    logo: string;
    title: string;
    subtitle: string;
  };
}

export default function PromoFrame({ variant = 'glassmorphic', branding }: PromoFrameProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Safely update the muted property directly on the DOM node 
  // We include `variant` in deps so that when the DOM remounts on frame change, it re-applies mute state!
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, variant]);

  let content = null;

  switch (variant) {
    case 'laptop':
      content = (
        <div className="relative w-full max-w-4xl mx-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]">
          {/* Laptop Screen / Lid */}
          <div className="bg-[#111] p-2 md:p-4 rounded-t-2xl md:rounded-t-3xl rounded-b-sm border-2 border-[#333] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] relative z-10 border-b-0">
            {/* Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-24 h-3 md:h-5 bg-black rounded-b-xl z-20 shadow-inner" />
            
            <div className="relative w-full overflow-hidden bg-black aspect-video rounded-xl shadow-[inset_0_0_10px_rgba(0,0,0,1)] border border-[#222]">
              <video ref={videoRef} src="/ogdcl_scroll.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none mix-blend-screen" />
            </div>
            
            {/* MacBook Logo text placeholder */}
            <div className="w-full text-center mt-1 md:mt-2 text-[#444] text-[6px] md:text-[10px] tracking-widest font-bold font-sans">
              MACBOOK PRO
            </div>
          </div>

          {/* Laptop Base */}
          <div className="relative z-0 w-[114%] -ml-[7%]">
            <div className="h-3 md:h-6 bg-gradient-to-b from-[#e0e0e0] via-[#c0c0c0] to-[#808080] rounded-t-sm rounded-b-xl md:rounded-b-3xl shadow-[0_30px_50px_rgba(0,0,0,0.7)] flex justify-center border-t border-white/50">
              <div className="w-16 md:w-32 h-1 md:h-2 bg-gradient-to-b from-[#999] to-[#777] rounded-b-lg md:rounded-b-xl mt-0 shadow-inner" />
            </div>
          </div>
        </div>
      );
      break;

    case 'polaroid':
      content = (
        <div className="relative w-[85%] md:w-[65%] max-w-2xl mx-auto bg-[#fafafa] p-4 md:p-6 pb-20 md:pb-28 rounded-sm shadow-[10px_20px_40px_rgba(0,0,0,0.6),_inset_0_0_20px_rgba(255,255,255,1)] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="relative w-full overflow-hidden bg-black aspect-square md:aspect-[4/3] shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] border border-gray-300">
            <video ref={videoRef} src="/ogdcl_scroll.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-[15%] contrast-125 sepia-[15%]" />
            <div className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none mix-blend-overlay" />
          </div>
          <div className="absolute bottom-6 md:bottom-10 left-0 w-full text-center text-gray-800 text-xl md:text-3xl font-bold opacity-80" style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}>
            OGDCL Memories
          </div>
        </div>
      );
      break;



    case 'billboard':
      content = (
        <div className="relative w-full max-w-7xl mx-auto mt-8 md:mt-16">
          {/* Main Billboard Screen */}
          <div className="relative w-full overflow-hidden bg-black aspect-[21/9] border-[10px] md:border-[16px] border-[#1a1a1a] shadow-[0_50px_100px_rgba(0,0,0,0.9)] z-10 rounded-sm">
            <video ref={videoRef} src="/ogdcl_scroll.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none border border-white/10 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]" />
          </div>
          
          {/* Metal Scaffolding Bottom */}
          <div className="absolute -bottom-12 md:-bottom-24 left-1/2 -translate-x-1/2 w-[85%] h-12 md:h-24 bg-gradient-to-b from-[#111] to-transparent flex justify-between px-6 md:px-16 z-0 opacity-90 border-t-[3px] border-[#333]">
            <div className="w-2 md:w-5 h-full bg-gradient-to-r from-[#222] via-[#555] to-[#222] shadow-xl" />
            <div className="w-1.5 md:w-3 h-full bg-gradient-to-r from-[#222] via-[#555] to-[#222] shadow-xl" />
            <div className="w-2 md:w-5 h-full bg-gradient-to-r from-[#222] via-[#555] to-[#222] shadow-xl" />
          </div>

          {/* Epic Spotlights shining up from below */}
          <div className="absolute -bottom-32 left-1/4 w-24 md:w-40 h-48 md:h-80 bg-gradient-to-t from-yellow-200/30 to-transparent blur-2xl md:blur-3xl transform -rotate-12 pointer-events-none z-20 origin-bottom" />
          <div className="absolute -bottom-32 right-1/4 w-24 md:w-40 h-48 md:h-80 bg-gradient-to-t from-cyan-200/30 to-transparent blur-2xl md:blur-3xl transform rotate-12 pointer-events-none z-20 origin-bottom" />
        </div>
      );
      break;

    case 'hologram':
      content = (
        <div className="relative w-full max-w-5xl mx-auto bg-cyan-950/40 rounded-xl p-2 md:p-3 shadow-[0_0_50px_rgba(6,182,212,0.5)] border border-cyan-400/60 backdrop-blur-md transition-colors duration-700">
          <div className="relative w-full overflow-hidden bg-black aspect-video rounded-lg border border-cyan-400/30 transition-colors duration-700">
            <video ref={videoRef} src="/ogdcl_scroll.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none bg-cyan-400/10 mix-blend-screen" />
          </div>
        </div>
      );
      break;

    case 'glassmorphic':
    default:
      content = (
        <div className="relative w-full max-w-6xl mx-auto bg-[#1a1a1a] rounded-[2rem] p-4 md:p-6 shadow-[0_40px_100px_rgba(0,0,0,0.6),_0_0_40px_rgba(0,133,111,0.5)] border-t border-white/20 transition-colors duration-700">
          <div className="relative w-full overflow-hidden bg-black aspect-video rounded-2xl shadow-inner border border-white/10 transition-colors duration-700">
            <video ref={videoRef} src="/ogdcl_scroll.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      );
      break;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative z-10 pt-10 pb-20">
      
      {/* Title Section */}
      <div className="flex flex-col items-center text-center mb-10 px-4 z-20">
        <img 
          src={branding?.logo || "/OGDCL-Logo.png"} 
          alt="Brand Logo" 
          className="h-28 mb-6 object-contain filter drop-shadow-xl"
        />
        <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg leading-tight">
          {branding?.title || "Pioneering Energy Frontiers"}
        </h1>
        <p className="text-2xl md:text-4xl font-bold mt-2 text-[#7bf1d6] drop-shadow-md">
          {branding?.subtitle || "Explore. Learn. Grow."}
        </p>
      </div>

      {/* 3D Animated Card Container */}
      <div 
        className="relative flex justify-center w-full"
        style={{ perspective: "1500px" }}
      >
        <motion.div
          key={variant} // re-animate if variant changes
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
          className="w-[90%] md:w-[80%]"
        >
          {content}
        </motion.div>
      </div>

      {/* Mute/Unmute Control Button Fixed to Background */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all duration-300 shadow-xl cursor-pointer"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
        )}
      </button>
    </div>
  );
}
