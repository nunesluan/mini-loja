import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { fetchProducts } from "../../../data/products";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts); 
  }, []);
  
  return (
    <div>
      <Navbar />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </main>
    </div>
  );
}
