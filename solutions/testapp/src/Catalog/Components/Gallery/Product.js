import React from 'react';
import Counter from './Counter';

const Product = ({ product, onLike,onUnlike }) => {

  return (
    <div>
      <img src={product.imageurl} width="100" height="100"/>
      <h2>{product.title}</h2>
      <p>Price: ${product.unitprice}</p>
      <p>likes: {product.likes}</p>
      <Counter likes={product.likes} onCounterLike={() => onLike(product.id)}
                                     onCounterUnLike={() => onUnlike(product.id)}></Counter>
    </div>
  );
};

export default Product;
