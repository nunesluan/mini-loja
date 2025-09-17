import React from "react";
import styles from "./Skeleton.module.css";

export default function Skeleton({ width = "100%", height = "1rem" }) {
  return <div className={styles.skeleton} style={{ width, height }} />;
}
