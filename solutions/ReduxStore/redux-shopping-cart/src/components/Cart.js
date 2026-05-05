// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;