// App.js
import React from 'react';
import { CartProvider } from './CartContext';
import Product from './Product';
import Cart from './Cart';

function CartContainer() {
  return (
    <CartProvider>
      <div>
        <h1>eCommerce Store</h1>
        <Product id={1} name="Product 1" price={29.99} />
        <Product id={2} name="Product 2" price={39.99} />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default CartContainer;
