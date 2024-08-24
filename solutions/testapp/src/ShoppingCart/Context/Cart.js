// Cart.js
import React, { useContext } from 'react';
import CartContext from './CartContext';

function Cart() {
  const { cart, removeItem, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
    </div>
  );
}

export default Cart;