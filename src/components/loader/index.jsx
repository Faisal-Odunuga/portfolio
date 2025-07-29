import React from "react";
import { CgSpinnerTwo } from "react-icons/cg";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <CgSpinnerTwo size={80} className="animate-spin" />
    </div>
  );
};

export default Loader;
