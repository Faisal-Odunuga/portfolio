import React from "react";
import ParticleComp from "../../components/ParticleComp";

const Hero = () => {
  return (
    <div>
      <ParticleComp>
        <div className="py-24 lg:py-32 space-y-5">
          <h3 className="uppercase">👨🏿‍💻 About Faisal Odunuga</h3>
          <h1 className="text-5xl lg:text-7xl font-black img-text">
            {"[Software Developer]"}
          </h1>
          <h3>I am a software developer based in Lagos, Nigeria</h3>
        </div>
      </ParticleComp>
    </div>
  );
};

export default Hero;
