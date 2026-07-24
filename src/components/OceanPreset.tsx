import React from "react";
import { LiquidOcean } from "./ui/liquid-ocean";

const OceanPreset = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      <LiquidOcean className="w-full h-full !min-h-screen" />
    </div>
  );
};

export default OceanPreset;
