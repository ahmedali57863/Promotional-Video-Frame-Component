import React from "react";
import { FluidMorphBg } from "./ui/fluid-morph-bg";

const FluidPreset = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      <FluidMorphBg className="w-full h-full opacity-100" />
    </div>
  );
};

export default FluidPreset;
