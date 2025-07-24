import React from "react";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className="px-20">{children}</main>
    </div>
  );
};

export default Layout;
