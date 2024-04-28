import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { AmazonContext } from "../../store/AmazonContext";

const Cart = () => {

  const { cart , handleChange} = useContext(AmazonContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    handlePrice();
  });

  const handlePrice = () => {
    let totalPrice = cart.reduce(
      (acc, item) => acc + item.amount * item.price,
      0
    );
    setPrice(totalPrice);
  };

  return (
    <div className="cart-main">
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="Product" />
            <p>{item.title}</p>
          </div>
          <div className="cart_buttons">
            <button onClick={() => handleChange(item, -1)}>-</button>
            <span>  {item.amount}  </span>
            <button onClick={() => handleChange(item, +1)}>+</button>
          </div>
          <div className="item-price">
            <span>Rs. {item.price}</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Amount: </span>
        <span>Rs. {price}</span>
      </div>
      <button className="proceed-button">Proceed to Buy</button>
    </div>
  );
};

export default Cart;
