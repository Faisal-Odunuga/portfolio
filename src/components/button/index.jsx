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
      className={`py-3 px-5 rounded-full transition-btn-hover duration-500 ease-in-out hover:translate-y-1  ${
        variant === "filled"
          ? "bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary "
          : variant === "outline"
          ? "bg-white border border-primary hover:border-none hover:bg-primary hover:text-white"
          : ""
      } ${size} ${className}`}
    >
      {btnText} {children}
    </button>
  );
};

export default Button;
