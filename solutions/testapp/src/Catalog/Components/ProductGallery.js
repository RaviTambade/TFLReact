// src/App.js
import React, { useState } from 'react';
import { products } from '../../data';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

const ProductGallery = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = products.filter(product =>
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
