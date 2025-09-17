import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { fetchProducts } from "../../../data/products";
import { lightTheme, darkTheme } from "./theme";

export default function App() {
  const [dark, setDark] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);

    fetchProducts(setProducts); 
  }, []);

  function toggleTheme() {
    setDark((d) => {
      localStorage.setItem("theme", !d ? "dark" : "light");
      return !d;
    });
  }

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Navbar dark={dark} toggleTheme={toggleTheme} />
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
          padding: "16px",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </main>
    </ThemeProvider>
  );
}
