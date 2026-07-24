import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import BackgroundParticles from './components/BackgroundParticles';
import PromoFrame from './components/PromoFrame';

function App() {
  const [bgStyle, setBgStyle] = useState({ background: '#00856F' });

  return (
    <div className="w-full h-screen relative overflow-hidden transition-all duration-500" style={bgStyle}>
      {/* 3D Background layer (Particles) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas>
          <ambientLight intensity={0.5} />
          <BackgroundParticles />
        </Canvas>
      </div>

      {/* Foreground UI layer (DOM 3D Card and Text) */}
      <div className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden">
        <PromoFrame onBgChange={setBgStyle} />
      </div>
    </div>
  );
}

export default App;
