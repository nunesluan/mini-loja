import React, { useState, useEffect } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Skeleton />;

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-bg-dark">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full aspect-square object-cover rounded-md"
        />
        {product.tag && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
            {product.tag}
          </span>
        )}
      </div>
      <h3 className="mt-2 font-semibold text-sm line-clamp-2">
        {product.title}
      </h3>
      <p className="text-primary font-bold mt-1">R$ {product.price}</p>
      <p className="text-yellow-500">{`★`.repeat(product.rating)}</p>
      <Button variant="solid" className="mt-2 w-full">
        Adicionar
      </Button>
    </div>
  );
}
