import React, { useState, useEffect } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500); // simula atraso
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="card">
        <Skeleton className="skeleton-img" height="200px" />
        <Skeleton className="skeleton-title" width="60%" />
        <Skeleton className="skeleton-price" width="40%" />
      </div>
    );
  }

  return (
    <div className="card" tabIndex="0">
      <img src={product.image} alt={product.title} className="card-img" />
      <h3 className="card-title">{product.title}</h3>
      <p className="card-price">R$ {product.price.toFixed(2)}</p>
      <p className="card-rating">{"★".repeat(Math.round(product.rating))}</p>
      {product.tag && <span className="card-tag">{product.tag}</span>}
      <div className="card-button">
        <Button variant="solid">Adicionar</Button>
      </div>
    </div>
  );
}
