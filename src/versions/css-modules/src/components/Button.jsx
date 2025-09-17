import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, variant = "solid", disabled, ...props }) {
  return (
    <button
      className={`${styles.base} ${styles[variant]} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
