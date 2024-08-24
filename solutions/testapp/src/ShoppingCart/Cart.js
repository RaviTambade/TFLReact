 
import React from 'react';

const Cart = ({ cartItems }) => {
  const calculateSubtotal = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Subtotal: ${calculateSubtotal()}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default ShoppingCart;
