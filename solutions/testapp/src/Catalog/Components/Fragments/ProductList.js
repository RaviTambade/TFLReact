// ProductList.js
import React from 'react';
import Product from './Product';

const products = [
  { id: 1, name: 'Gerbera', price: 12 },
  { id: 2, name: 'Rose', price: 24 },
  { id: 3, name: 'Lotus', price: 34 },
];

function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}

export default ProductList;
