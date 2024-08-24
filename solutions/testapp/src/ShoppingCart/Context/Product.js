// Product.js
import React, { useContext } from 'react';
import CartContext from './CartContext';

function Product({ id, name, price }) {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem({ id, name, price, quantity: 1 });
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
