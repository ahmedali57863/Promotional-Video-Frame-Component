import { Sparkles } from '@react-three/drei';

export default function BackgroundParticles() {
  return (
    <group position={[0, 0, -5]}>
      <Sparkles 
        count={500} 
        scale={20} 
        size={2} 
        speed={0.4} 
        opacity={0.3} 
        color="#a0f0e0" 
        noise={10} // gives it that drifting cosmic dust feel
      />
    </group>
  );
}
