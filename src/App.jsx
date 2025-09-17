import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import CssGlobalPage from "./versions/css-global/src/App";
import CssModulesPage from "./versions/css-modules/src/App";
import TailwindPage from "./versions/tailwind/src/App";
import StyledComponentsPage from "./versions/styled-components/src/App";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/global" element={<CssGlobalPage />} />
        <Route path="/modules" element={<CssModulesPage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="/styled" element={<StyledComponentsPage />} />
        <Route path="*" element={<CssGlobalPage />} />
      </Routes>
    </>
  );
}
