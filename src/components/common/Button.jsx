import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyles = "px-4 py-2 text-nowrap cursor-pointer  rounded-lg  transition-all";
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "border border-lightGrey border-2 font-neueRoman text-lightGrey text-sm sm:text-base   hover:bg-gray-200 transition",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} font-neueLight font-li  ${variantStyles[variant]} ${className}`}
    //   className={`!bg-black h-20`} 
    >
      {children}
    </button>
  );
};

export default Button;