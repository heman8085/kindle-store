import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Amazon from "./components/amazon/Amazon";
import Cart from "./components/pages/cart/Cart";
import { AmazonContext } from "./components/store/AmazonContext";
import AboutUs from "./components/pages/about/AboutUs";
import ContactUs from "./components/pages/contact/ContactUs";

function App() {
  const { warning } = useContext(AmazonContext);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Amazon />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
    </Router>
  );
}

export default App;
