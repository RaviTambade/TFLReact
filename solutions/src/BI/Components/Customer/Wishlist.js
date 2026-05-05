// Wishlist.js
import React from 'react';

const wishlistItems = [
  { id: 1, name: 'Product A', price: 19.99 },
  { id: 2, name: 'Product B', price: 29.99 },
  { id: 3, name: 'Product C', price: 39.99 },
];

function Wishlist() {
  return (
    <section>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - ${item.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Wishlist;
