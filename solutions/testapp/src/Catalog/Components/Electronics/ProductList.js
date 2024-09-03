// src/ProductList.js
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div style={styles.container}>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <h2 style={styles.productName}>{product.name}</h2>
            <p style={styles.productCategory}>Category: {product.category}</p>
            <p style={styles.productPrice}>Price: ${product.price.toFixed(2)}</p>
            <p style={styles.productRating}>Rating: {product.rating} stars</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    justifyContent: 'center'
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff'
  },
  productName: {
    margin: '0 0 10px',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  productCategory: {
    margin: '0 0 10px',
    fontSize: '16px'
  },
  productPrice: {
    margin: '0 0 10px',
    fontSize: '16px',
    color: '#007bff'
  },
  productRating: {
    margin: '0',
    fontSize: '16px'
  }
};

export default ProductList;
