import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { fetchProducts } from "../../../data/products";
import "./styles/tokens.css";

import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts); 
  }, []);
  
  return (
    <div>
      <Navbar />
      <main className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </main>
    </div>
  );
}
