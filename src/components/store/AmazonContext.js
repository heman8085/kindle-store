import React,{ createContext ,useState} from "react";
const AmazonContext = createContext();

const AmazonProvider = ({ children }) => {
    
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
         const newAmount = Math.max(0, cartItem.amount + change);
         if (newAmount < 1) {
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
     .filter(Boolean);

   setCart(updatedCart);
 };

    const size = cart.length;
    
    return (
        <AmazonContext.Provider value={{handleChange,addToCartHandler,warning,setWarning,cart,setCart,size}}>
         {children}
        </AmazonContext.Provider>
    )
}

export {AmazonContext, AmazonProvider}