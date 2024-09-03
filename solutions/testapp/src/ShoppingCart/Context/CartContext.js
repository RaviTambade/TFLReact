
import React, { createContext, useState } from 'react';

// Create a context for the shopping cart
const CartContext = createContext();

// Create a provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Get total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;


/*

 eCommerce application, 
 you can use the useContext hook to manage and
  share important data across various components.

*/