import React from "react";
import ParticlesComponent from "../particle";

const ParticleComp = ({ children }) => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute w-full h-full backdrop-blur-sm"></div>
      <ParticlesComponent />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default ParticleComp;
