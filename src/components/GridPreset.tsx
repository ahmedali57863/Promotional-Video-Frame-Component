import React from "react";
import { PerspectiveGrid } from "./ui/perspective-grid";

const GridPreset = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-auto">
      <PerspectiveGrid className="w-full h-full" />
    </div>
  );
};

export default GridPreset;
