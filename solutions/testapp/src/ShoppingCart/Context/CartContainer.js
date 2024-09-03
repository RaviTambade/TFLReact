// App.js
import React from 'react';
import { CartProvider } from './CartContext';
import Product from './Product';
import Cart from './Cart';
import ProductServiceInMem from '../../Catalog/Services/ProductServiceInMem';

const flowers=ProductServiceInMem.getAll();

function CartContainer() {
  return (

    <CartProvider>
      <div>
        <h2> Todays Flowers</h2>
        <table>
          <tr>
            <td> {
              <table>
                <tr>
                  {
                    flowers.map((product) => (
                      <td><Product id={product.id} name={product.title} image={product.imageurl} price={product.unitprice} /></td>))
                  }
                </tr>
              </table>
              }
            </td>
            <td> <Cart /></td>
          </tr>
        </table>
      </div>
    </CartProvider>
  );
}

export default CartContainer;