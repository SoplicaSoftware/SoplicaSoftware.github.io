import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

// Resume redirect component
const ResumeRedirect = () => {
  useEffect(() => {
    // Redirect to the PDF file in the public directory
    window.location.href = "/Kacper-Rogóż-Resume-20250603-1.pdf";
  }, []);

  return null;
};

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ResumeRedirect />} path="/resume" />
    </Routes>
  );
}

export default App;
