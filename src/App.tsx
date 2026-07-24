import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import BackgroundParticles from './components/BackgroundParticles';
import PromoFrame from './components/PromoFrame';
import Sidebar from './components/Sidebar';
import FloatingClouds from './components/FloatingClouds';
import RainbowBorder from './components/RainbowBorder';
import MatrixRain from './components/MatrixRain';
import Fireflies from './components/Fireflies';
import Snowfall from './components/Snowfall';
import VortexPreset from './components/VortexPreset';
import FluidPreset from './components/FluidPreset';
import AuroraPreset from './components/AuroraPreset';
import RaysPreset from './components/RaysPreset';
import LightLinesPreset from './components/LightLinesPreset';
import OceanPreset from './components/OceanPreset';
import GridPreset from './components/GridPreset';
import { Menu } from 'lucide-react';

function App() {
  const [bgStyle, setBgStyle] = useState(() => {
    const saved = localStorage.getItem('ogdcl_bg_style');
    return saved ? JSON.parse(saved) : { background: '#00856F' };
  });

  const [activeFrame, setActiveFrame] = useState('glassmorphic');
  const [activePreset, setActivePreset] = useState(() => {
    return localStorage.getItem('ogdcl_preset') || 'none';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [branding, setBranding] = useState(() => {
    const saved = localStorage.getItem('ogdcl_branding');
    return saved ? JSON.parse(saved) : {
      logo: '/ogdcl-logo.png',
      title: 'Pioneering Energy Frontiers',
      subtitle: 'Explore. Learn. Grow.'
    };
  });

  // Persist background changes
  useEffect(() => {
    localStorage.setItem('ogdcl_bg_style', JSON.stringify(bgStyle));
  }, [bgStyle]);

  useEffect(() => {
    localStorage.setItem('ogdcl_preset', activePreset);
  }, [activePreset]);

  // Persist branding changes
  useEffect(() => {
    localStorage.setItem('ogdcl_branding', JSON.stringify(branding));
  }, [branding]);

  return (
    <div className="w-full h-screen relative overflow-hidden transition-all duration-500" style={bgStyle}>
      {/* 3D Background layer (Particles) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas>
          <ambientLight intensity={0.5} />
          <BackgroundParticles />
        </Canvas>
      </div>

      {/* Preset Layers */}
      {activePreset === 'clouds' && <FloatingClouds />}
      {activePreset === 'rainbow' && <RainbowBorder />}
      {activePreset === 'matrix' && <MatrixRain />}
      {activePreset === 'fireflies' && <Fireflies />}
      {activePreset === 'snow' && <Snowfall />}
      {activePreset === 'vortex' && <VortexPreset />}
      {activePreset === 'fluid' && <FluidPreset />}
      {activePreset === 'aurora' && <AuroraPreset />}
      {activePreset === 'rays' && <RaysPreset />}
      {activePreset === 'lines' && <LightLinesPreset />}
      {activePreset === 'ocean' && <OceanPreset />}
      {activePreset === 'grid' && <GridPreset />}

      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="absolute top-6 left-6 z-[60] p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all duration-300 shadow-xl cursor-pointer"
        aria-label="Open Sidebar"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Component */}
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onBgChange={setBgStyle}
        activeFrame={activeFrame}
        setActiveFrame={setActiveFrame}
        activePreset={activePreset}
        setActivePreset={setActivePreset}
        branding={branding}
        setBranding={setBranding}
      />

      {/* Foreground UI layer (DOM 3D Card and Text) */}
      <div className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden pt-12">
        <PromoFrame variant={activeFrame} branding={branding} />
      </div>
    </div>
  );
}

export default App;
