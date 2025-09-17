/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": "#fdfdfb",
        "bg-dark": "#1a1a1a",
        "text-light": "#222",
        "text-dark": "#fdfdfb",
        primary: "#2e7d32",
        secondary: "#f5f1e6",
      },
    },
  },
  plugins: [],
}
