import React from "react";
import Project from "./Project";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cookit 👨🏿‍🍳",
      desc: "Cookit Now is a modern recipe web app that helps users discover, search, and explore delicious meals in seconds. Built with a sleek interface and smooth UX, it features real-time recipe search, responsive design, and dynamic routing.",
      image:
        "https://plus.unsplash.com/premium_photo-1673795754005-214e3e1fccba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF0dGVybnxlbnwwfHwwfHx8MA%3D%3D",
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
