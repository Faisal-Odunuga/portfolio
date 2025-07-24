import React from "react";
import ParticlesComponent from "../../components/particle";
import Hero from "../../shared/home/Hero";
import ProjectsSection from "../../shared/home/ProjectsSection";

const Home = () => {
  return (
    <div className="w-full space-y-10">
      <Hero />
      <ProjectsSection />
    </div>
  );
};

export default Home;
