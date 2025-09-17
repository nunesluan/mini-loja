import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-bg-light dark:bg-bg-dark p-4 shadow-sm transition-colors">
      <div className="font-bold">Minha Loja</div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema"
          className="text-xl"
        >
          {dark ? "🌙" : "☀️"}
        </button>
        <span className="cart-badge"><FaShoppingCart />3</span>
      </div>
    </nav>
  );
}
