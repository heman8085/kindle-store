import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  
  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="data-img" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, -1)}> - </button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, +1)}> + </button>
          </div>
          <div className="">
            <span>Rs. {item.price}</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Amount   : </span>
        <span>Rs.{price}</span>
      </div>
    </>
  );
};

export default Cart;
