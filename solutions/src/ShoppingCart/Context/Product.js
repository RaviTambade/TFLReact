import React, { useContext } from 'react';
import CartContext from './CartContext';

function Product({ id, name, image, price }) {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem({ id, name, price, quantity: 1 });
  };

  return (
    <div>
      <img src={image} widht="100" height="100"/>
      <h4>{name}</h4>
      <p> ₹{price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;