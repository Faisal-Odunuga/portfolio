import React from "react";
import ParticlesComponent from "../../components/particle";
import Button from "../../components/button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full">
      <div className="absolute w-full h-full backdrop-blur-sm"></div>
      <ParticlesComponent />
      <div className="relative z-10 py-10 flex flex-col items-center justify-center text-center gap-10 h-full">
        <h1 className="text-5xl lg:text-7xl font-black">
          Hi, I'm Faisal Odunuga
        </h1>
        <p className="text- lg:text-lg w-full lg:w-1/2">
          Frontend Developer building fast, responsive, and user-friendly web
          interfaces with React, Tailwind, and JavaScript.
        </p>
        <div className="flex gap-3">
          <Button btnText={"View My Works"} />
          <Button btnText={"Download CV"} variant="outline" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
