// Product.js
import React from 'react';

function Product({ product }) {
  return (
    <>
      <li>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
      </li>
    </>
  );
}

export default Product;
