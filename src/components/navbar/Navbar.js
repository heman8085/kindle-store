import React,{ useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AmazonContext } from "../store/AmazonContext";

const Navbar = () => {

  const { size } = useContext(AmazonContext);
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Amazon Kindle
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        <div className="cart-container">
          <Link to="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <span className="cart-size">{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
