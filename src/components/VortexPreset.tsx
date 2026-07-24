import React from "react";
import { Vortex } from "./ui/vortex";

const VortexPreset = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      <Vortex
        backgroundColor="black"
        className="w-full h-full"
      />
    </div>
  );
};

export default VortexPreset;
