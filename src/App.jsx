import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import About from "./component/About.jsx";
import Footer from "./component/Footer.jsx";
import Main from "./component/Main.jsx";
import ProductsList from "./component/ProductsList.jsx";
import Contact from "./component/Contact.jsx";


const App = () => {
  return (
    <div className="bg-[#d5d5d5]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
