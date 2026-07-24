import React from "react";
import { AuroraHero } from "./ui/aurora-hero";

const AuroraPreset = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      <AuroraHero className="w-full h-full" title="" />
    </div>
  );
};

export default AuroraPreset;
