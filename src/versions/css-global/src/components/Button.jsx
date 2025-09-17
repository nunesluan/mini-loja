import React from "react";

export default function Button({ children, variant = "solid", disabled, ...props }) {
  return (
    <button
      className={`btn ${variant} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
