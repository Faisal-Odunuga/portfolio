import React from "react";
import Button from "../../components/button";
import ParticleComp from "../../components/ParticleComp";
import { Link } from "react-router";
import { allPaths } from "../../routes/path";

const Hero = () => {
  return (
    <div className="h-[60vh] lg:h-[80vh]">
      <ParticleComp>
        <div className="py-10 flex flex-col items-center justify-center text-center gap-10 h-full">
          <h1 className="text-5xl lg:text-7xl font-black">
            Hi, I'm Faisal Odunuga 👋🏿
          </h1>
          <p className="text- lg:text-lg w-full lg:w-1/2">
            Frontend Developer building fast, responsive, and user-friendly web
            interfaces with React, Tailwind, and JavaScript. Let’s bring ideas
            to life, one pixel at a time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to={allPaths.projects}>
              <Button btnText={"View My Works"} />
            </Link>
            <a
              href="https://drive.google.com/file/d/1f-UBR-qFZ2uiLPruXyWkyHLXaAtfTee8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button btnText={"Download CV"} variant="outline" />
            </a>
          </div>
        </div>
      </ParticleComp>
    </div>
  );
};

export default Hero;
