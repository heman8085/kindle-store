import React from "react";
import './Navbar.css';

const Navbar = ({size,setShow}) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>Amazon Kindle</span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span className="size">{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
