import React from "react";

const MySkills = () => {
  const skills = {
    languages: [
      {
        title: "HTML",
        icon: <i className="devicon-html5-plain-wordmark colored"></i>,
      },
      {
        title: "Javascript",
        icon: <i className="devicon-javascript-plain colored"></i>,
      },
    ],
    frameworks: [
      {
        title: "React",
        icon: <i className="devicon-react-original colored"></i>,
      },
      {
        title: "Tailwind",
        icon: <i className="devicon-tailwindcss-original colored"></i>,
      },
      {
        title: "Bootstrap",
        icon: <i className="devicon-bootstrap-plain colored"></i>,
      },
      {
        title: "Sass",
        icon: <i className="devicon-sass-original colored"></i>,
      },
      {
        title: "React Router",
        icon: <i className="devicon-reactrouter-plain colored"></i>,
      },
      {
        title: "Framer",
        icon: <i className="devicon-framermotion-original colored"></i>,
      },
      {
        title: "Three.js",
        icon: <i className="devicon-threejs-original colored"></i>,
      },
      {
        title: "Chartjs",
        icon: <i className="devicon-chartjs-plain colored"></i>,
      },
      {
        title: "Material UI",
        icon: <i className="devicon-materialui-plain colored"></i>,
      },
      {
        title: "Chakra UI",
        icon: <i className="devicon-chakraui-plain colored"></i>,
      },
    ],
    tools: [
      {
        title: "Git",
        icon: <i className="devicon-git-plain colored"></i>,
      },
      {
        title: "GitHub",
        icon: <i className="devicon-github-original colored"></i>,
      },
      {
        title: "NPM",
        icon: <i className="devicon-npm-original-wordmark colored"></i>,
      },
      {
        title: "Figma",
        icon: <i className="devicon-figma-plain colored"></i>,
      },
      {
        title: "Slack",
        icon: <i className="devicon-slack-plain colored"></i>,
      },
      {
        title: "Trello",
        icon: <i className="devicon-trello-plain colored"></i>,
      },
      {
        title: "Vercel",
        icon: <i className="devicon-vercel-original colored"></i>,
      },
      {
        title: "Netlify",
        icon: <i className="devicon-netlify-plain colored"></i>,
      },
      {
        title: "Firebase",
        icon: <i className="devicon-firebase-plain colored"></i>,
      },
      {
        title: "Supabase",
        icon: <i className="devicon-supabase-plain colored"></i>,
      },
      {
        title: "AppWrite",
        icon: <i className="devicon-appwrite-original colored"></i>,
      },
    ],
  };
  return (
    <div className="!mb-20">
      <h1 className="text-center text-3xl font-bold mb-8">{"<Skills/>"}</h1>
      <div className="flex flex-wrap justify-between gap-10 text-wrap">
        <div>
          <h2 className="font-bold mb-4">Programming Languages</h2>
          <div className="flex flex-wrap md:grid md:grid-cols-2 lg:gap-8 md:gap-7 sm:gap-6 gap-4">
            {skills.languages.map(({ title, icon: Icon }, i) => (
              <div className="flex gap-2 items-center text-sm" key={i}>
                <span className="text-2xl">{Icon}</span>
                <p className="font-bold">{title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-4">Libraries & Frameworks</h2>
          <div className="flex flex-wrap md:grid md:grid-cols-3 lg:gap-8 md:gap-7 sm:gap-6 gap-4">
            {skills.frameworks.map(({ title, icon: Icon }, i) => (
              <div className="flex gap-2 items-center text-sm" key={i}>
                <span className="text-2xl">{Icon}</span>
                <p className="font-bold">{title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-4">Tools</h2>
          <div className="flex flex-wrap md:grid md:grid-cols-2 lg:gap-8 md:gap-7 sm:gap-6 gap-4">
            {skills.tools.map(({ title, icon: Icon }, i) => (
              <div className="flex gap-2 items-center text-sm" key={i}>
                <span className="text-2xl">{Icon}</span>
                <p className="font-bold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
