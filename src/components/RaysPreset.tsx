import React from "react";
import { AnimatedRays } from "./ui/animated-rays";

const RaysPreset = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      <AnimatedRays className="w-full h-full" />
    </div>
  );
};

export default RaysPreset;
