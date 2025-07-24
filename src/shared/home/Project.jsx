import React from "react";
import Button from "../../components/button";
import { FiGithub } from "react-icons/fi";
import { IoPlayOutline } from "react-icons/io5";

const Project = ({ project }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center">
      <div className="w-full h-full min-h-[30vh] border-8 border-blue-500">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-base">{project.desc}</p>
        <span className="flex gap-4">
          <div className="flex gap-2 items-center transition-colors duration-150 hover:border border-blue-500 rounded-lg p-3">
            <span>
              <IoPlayOutline />
            </span>
            <a href={project.link} target="_blank">
              Live Demo
            </a>
          </div>

          <div className="flex gap-2 items-center transition-colors duration-75 hover:border border-blue-500 rounded-lg p-3">
            <span>
              <FiGithub />
            </span>
            <a href={project.link} target="_blank">
              Code
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Project;
