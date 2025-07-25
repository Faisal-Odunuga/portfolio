import React from "react";
import Button from "../../components/button";
import ParticleComp from "../../components/ParticleComp";

const Hero = () => {
  return (
    <div>
      <ParticleComp>
        <div className="py-24 lg:py-32 space-y-5">
          <h3 className="uppercase">🗂️ Projects</h3>
          <h1 className="text-5xl lg:text-7xl font-black img-text">
            {"{Projects}"}
          </h1>
          <h3>Some of my recent projects</h3>
        </div>
      </ParticleComp>
    </div>
  );
};

export default Hero;
