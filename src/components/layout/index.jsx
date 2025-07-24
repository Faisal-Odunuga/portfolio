import React from "react";
import Header from "../header";
import MySkills from "../my-skills";
import Hero from "../../shared/home/Hero";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className="w-[90%] lg:w-[80%] space-y-20 max-w-7xl mx-auto">
        {children}
        <MySkills />
      </main>
    </div>
  );
};

export default Layout;
