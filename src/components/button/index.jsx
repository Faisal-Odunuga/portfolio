import React from "react";

const Button = ({ btnText, variant = "filled", size, className, ...props }) => {
  return (
    <button
      {...props}
      className={`py-3 px-5 rounded-full transition-all duration-500 ease-in-out hover:translate-y-2 ${
        variant === "filled"
          ? "bg-blue-600 text-white hover:bg-blue-800"
          : variant === "outline"
          ? "bg-white border border-blue-600 hover:border-black"
          : ""
      } ${size} ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
