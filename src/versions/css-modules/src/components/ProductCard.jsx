import React, { useState, useEffect } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className={styles.card}>
        <Skeleton height="200px" />
        <Skeleton width="60%" />
        <Skeleton width="40%" />
      </div>
    );
  }

  return (
    <div className={styles.card} tabIndex="0">
      <img src={product.image} alt={product.title} loading="lazy" className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p style={{ fontWeight: "bold" }}>R$ {product.price.toFixed(2)}</p>
      <p>{"★".repeat(Math.round(product.rating))}</p>
      <span className={styles.tag}>{product.tag}</span>
      <div style={{ marginTop: "8px" }}>
        <Button variant="solid">Adicionar</Button>
      </div>
    </div>
  );
}
