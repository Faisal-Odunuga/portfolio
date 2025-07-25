import React from "react";
import Project from "./ProjectComp";

const AllProjects = () => {
  const projects = [
    {
      title: "Cookit 👨🏿‍🍳",
      desc: "A modern recipe discovery platform developed using React and React Router, with Tailwind CSS for styling. Implements real-time search filtering, dynamic routing, and mobile-first responsiveness for seamless UX across devices.",
      image: "/images/cookit.png",
      stack: ["React", "Tailwind CSS", "React Router", "Toastify", "Vercel"],
      link: "https://cookit-now.vercel.app/",
      github: "https://github.com/Faisal-Odunuga/Cookit",
    },
    {
      title: "The React Quiz 🧠",
      desc: "A performant quiz application built with React, Vite, and Tailwind CSS. It features dynamic question rendering, real-time score computation, and a fully responsive UI optimized for speed and interactivity.",
      image: "/images/react-quiz.png",
      stack: ["React", "Tailwind CSS", "React Router", "Vercel"],
      link: "https://the-react-quiz-omega.vercel.app/",
      github: "https://github.com/Faisal-Odunuga/the-react-quiz",
    },
    {
      title: "MTN (Clone)",
      desc: "A fully responsive, high-fidelity clone of the MTN Nigeria homepage built with Tailwind CSS. This project demonstrates advanced use of utility-first styling, responsive design principles, layout structuring, and modern frontend development techniques.",
      image: "/images/mtn.png",
      stack: ["React", "Tailwind CSS", "Vercel"],
      link: "https://mtn-clone.vercel.app/",
      github: "https://github.com/Faisal-Odunuga/mtn-clone",
    },
    {
      title: "HTTPie (Clone) - Desktop Only",
      desc: "A pixel-perfect clone of the HTTPie homepage built using only HTML and CSS. Built to showcase precision in layout replication, spacing, and styling — without responsiveness or JavaScript.",
      image: "../../../public/images/httpie.png",
      stack: ["React", "Vanila CSS", "Vercel"],
      link: "https://httpie-clone.vercel.app/",
      github: "https://github.com/Faisal-Odunuga/httpie-clone",
    },
  ];
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
