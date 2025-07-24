import React from "react";
import ParticleComp from "../../components/ParticleComp";

const About = () => {
  return (
    <section className="space-y-10">
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
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="basis-1/2 flex items-center justify-center">
          <img
            src="../../../public/images/my-pic.png"
            alt="Faisal Odunuga"
            className="rounded-lg w-[60%] lg:w-[80%]"
          />
        </div>
        <div className="basis-1/2 space-y-5">
          <h2 className="text-2xl font-bold">Meet Faisal Odunuga 👥</h2>
          <p>
            Hi, I'm Faisal — a passionate Front-End Developer 💻 with 3 years of
            experience turning ideas into clean, fast ⚡, and modern web
            interfaces.
          </p>
          <p>
            I build full-scale applications using tools like React, Tailwind
            CSS, and Framer Motion, and I’m just as comfortable working with CMS
            platforms like WordPress when needed. I care about pixel-perfect
            design 🎯, accessibility ♿, and creating smooth, engaging user
            experiences ✨.
          </p>
          <p>
            Whether it’s crafting reusable components, optimizing performance
            🚀, or adding that subtle interaction that brings an interface to
            life, I focus on the details that matter.
          </p>
          <p>
            I started my journey at Ijaiye Ojokoro Senior College 🏫, and along
            the way, I’ve taught front-end development 👨‍🏫, contributed to
            meaningful projects in education 🎓, health 🏥, and business 📊, and
            kept sharpening my skills through real-world problem solving.
          </p>
          <p>
            I believe great web experiences aren’t just built — they’re designed
            with empathy 💙, speed ⚡, and usability ✅ in mind. That’s what I
            aim for in every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
