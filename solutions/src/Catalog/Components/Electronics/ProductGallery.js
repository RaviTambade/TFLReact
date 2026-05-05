// src/App.js
import React, { useState } from 'react';
 
import SearchBar from './SearchBar';
import ProductList from './ProductList';

  const electronicsProducts = [
  { id: 1, name: 'Apple iPhone 13', description: 'Latest model of iPhone' },
  { id: 2, name: 'Samsung Galaxy S21', description: 'Newest Samsung Galaxy' },
  { id: 3, name: 'Google Pixel 6', description: 'Latest Google Pixel phone' },
  { id: 4, name: 'Sony WH-1000XM4', description: 'Noise-canceling headphones' },
  { id: 5, name: 'Apple Watch Series 7', description: 'Latest Apple smartwatch' },
];
const ProductGallery = () => {
  const [filteredProducts, setFilteredProducts] = useState(electronicsProducts);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = electronicsProducts.filter(product =>
      product.name.toLowerCase().includes(lowercasedQuery) ||
      product.description.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Search</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductGallery;
