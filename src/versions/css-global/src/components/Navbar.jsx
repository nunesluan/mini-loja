import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    if (dark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  }

  return (
    <nav className="navbar">
      <div className="logo">Minha Loja</div>
      <div className="actions">
        <button className="btn-theme" onClick={toggleTheme} aria-label="Alternar tema">
          {dark ? "🌙" : "☀️"}
        </button>
        <span className="cart-badge"><FaShoppingCart />3</span>
      </div>
    </nav>
  );
}
