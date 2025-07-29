import React from "react";
import Button from "../../components/button";
import { FiGithub } from "react-icons/fi";
import { IoPlayOutline } from "react-icons/io5";
import ImageWithSkeleton from "../../components/image-skeleton";

const ProjectComp = ({ project }) => {
  return (
    <div className="border border-primary rounded-lg">
      <div className="w-full">
        <ImageWithSkeleton
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
        {/* <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-t-lg"
        /> */}
      </div>
      <div className="space-y-4 p-6">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-sm">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project?.stack.map((project, i) => (
            <span
              key={i}
              className="text-sm py-1 px-2 rounded-full bg-primary text-white"
            >
              {project}
            </span>
          ))}
        </div>
        <span className="flex flex-wrap gap-2">
          <a href={project.link} target="_blank">
            <Button variant="outline" className={"py-2"}>
              <span className="flex gap-2 items-center">
                <IoPlayOutline /> Live Demo
              </span>
            </Button>
          </a>
          <a href={project.github} target="_blank">
            <Button variant="outline" className={"py-2"}>
              <span className="flex gap-2 items-center">
                <FiGithub /> Code
              </span>
            </Button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectComp;
