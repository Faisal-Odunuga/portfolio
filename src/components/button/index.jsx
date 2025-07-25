import React from "react";

const Button = ({
  btnText,
  variant = "filled",
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`py-3 px-5 rounded-full transition-all duration-500 ease-in-out hover:translate-y-1  ${
        variant === "filled"
          ? "bg-blue-600 text-white hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 "
          : variant === "outline"
          ? "bg-white border border-blue-600 hover:border-none hover:bg-blue-600 hover:text-white"
          : ""
      } ${size} ${className}`}
    >
      {btnText} {children}
    </button>
  );
};

export default Button;
