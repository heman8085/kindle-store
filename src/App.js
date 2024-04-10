import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Amazon from "./components/amazon/Amazon";
import Cart from "./components/cart/Cart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  
  const addToCartHandler = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

const handleChange = (item, change) => {
  const updatedCart = cart
    .map((cartItem) => {
      if (cartItem.id === item.id) {
        const newAmount = Math.max(0, cartItem.amount + change); // Ensure amount doesn't go below 0
        if (newAmount < 1) {
          // If amount goes below 1, remove the item from the cart
          return null;
        } else {
          return {
            ...cartItem,
            amount: newAmount,
          };
        }
      }
      return cartItem;
    })
    .filter(Boolean); // Filter out null values (removed items)

  setCart(updatedCart);
};


  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Amazon addToCartHandler={addToCartHandler} />
      ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
    </React.Fragment>
  );
}

export default App;
