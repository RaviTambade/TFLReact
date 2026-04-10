import React, { useState, useEffect } from 'react';
import Product from './Product';
import ProductServiceInMem from "../../Services/ProductServiceInMem";

//In React Properties are tunneled  and events are bubbled

const flowers=ProductServiceInMem.getAll();

const ProductList = () => {
  const [products, setProducts] = useState(flowers);

  const handleLike = (productId) => {
    setProducts((prev) =>
        prev.map((product) =>(
          product.id === productId  ? { ...product, likes: product.likes + 1 }  : product
        )
       )
    );
  };


  const handleUnlike = (productId) => {
    setProducts((prev) =>
        prev.map((product) =>(
          product.id === productId  ? { ...product, likes: product.likes -1 }  : product
        )
       )
    );
  };

  //used for side effect
  useEffect(() => {console.log('Products updated:', products);}, [products]);

  return (
    <div>
      <h3>Todays fresh Flowers</h3>
      <table>
        <tr>
          {
            products.map((product) => (
              <td> 
                <Product key={product.id} product={product} 
                          onLike={handleLike} onUnlike={handleUnlike}/>
              </td>        
            ))
          }
        </tr>
      </table>
    </div>
  );
};

export default ProductList;