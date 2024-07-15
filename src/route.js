import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import ContactUs from "./pages/contact-us/ContactUs";
import Services from "./pages/services/Services";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
