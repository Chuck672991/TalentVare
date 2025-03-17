import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition-all";
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      onClick={onClick}
    //   className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      className={`bg-primary h-20`}
    >
      {children}
    </button>
  );
};

export default Button;