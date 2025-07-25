import React from "react";
import Project from "./Project";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cookit 👨🏿‍🍳",
      desc: "Cookit Now is a modern recipe web app that helps users discover, search, and explore delicious meals in seconds. Built with a sleek interface and smooth UX, it features real-time recipe search, responsive design, and dynamic routing.",
      image: "/images/cookit.png",
      link: "https://www.example.com",
    },
  ];
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-8">
        Some of my {"{projects} 💻"}
      </h1>
      <div className="space-y-5">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
