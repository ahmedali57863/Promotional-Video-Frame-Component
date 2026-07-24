import React from "react";
import { LightLines } from "./ui/light-lines";

const LightLinesPreset = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      <LightLines className="w-full h-full" />
    </div>
  );
};

export default LightLinesPreset;
