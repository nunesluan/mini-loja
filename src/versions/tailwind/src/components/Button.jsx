import React from "react";

export default function Button({ variant = "solid", children, ...props }) {
  const base =
    "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-primary transition shadow-sm";

  const variants = {
    solid: "bg-primary text-white hover:bg-green-700",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-secondary",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
