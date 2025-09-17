// src/theme.js
export const lightTheme = {
  colors: {
    background: "#fdfdfb",
    text: "#222",
    primary: "#2e7d32",
    secondary: "#f5f1e6",
  },
  radii: {
    md: "8px",
    lg: "16px",
  },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.1)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 8px 16px rgba(0,0,0,0.15)",
  },
  transition: "200ms ease-in-out",
};

export const darkTheme = {
  colors: {
    background: "#1a1a1a",
    text: "#fdfdfb",
    primary: "#2e7d32",
    secondary: "#f5f1e6",
  },
  radii: lightTheme.radii,
  shadows: lightTheme.shadows,
  transition: lightTheme.transition,
};
