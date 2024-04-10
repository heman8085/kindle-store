import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cart, handleChange }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    handlePrice();
  }, [cart]);
  
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  
  

  return (
    <>
      <div className="cart-main">
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
      </div>
    </>
  );
};

export default Cart;
