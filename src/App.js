import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Career from "./pages/career/Career";
import Header from "./pages/template/Header";
import Footer from "./pages/template/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/" element={<About />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/career/" element={<Career />} />
          <Route path="/contact-us/" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
