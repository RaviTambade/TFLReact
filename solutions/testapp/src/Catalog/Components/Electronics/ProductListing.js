// src/ProductListing.js
import React, { useState } from 'react';
import Filter from './Filter';
import Sort from './Sort';
import ProductList from './ProductList';

const initialProducts = [
  { id: 1, name: 'Apple', category: 'fruits', price: 50, rating: 5 },
  { id: 2, name: 'Onion', category: 'vegetable', price: 150, rating: 3 },
  { id: 3, name: 'Gerbera', category: 'flowers', price: 200, rating: 4 },
  { id: 4, name: 'Banana', category: 'fruits', price: 200, rating: 4 },
  { id: 5, name: 'Carrot', category: 'vegetable', price: 150, rating: 3 },
  { id: 6, name: 'Rose', category: 'flowers', price: 200, rating: 4 }
];

const ProductListing = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('');

  const handleFilterChange = (filters) => {
    let updatedProducts = products.filter(product => {
      return (!filters.category || product.category === filters.category) &&
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1] &&
        product.rating >= filters.rating;
    });

    if (sortOrder) {
      updatedProducts.sort((a, b) => {
        if (sortOrder === 'price-asc') return a.price - b.price;
        if (sortOrder === 'price-desc') return b.price - a.price;
        if (sortOrder === 'rating-desc') return b.rating - a.rating;
        return 0;
      });
    }

    setFilteredProducts(updatedProducts);
  };

  const handleSortChange = (sortOrder) => {
    setSortOrder(sortOrder);
    handleFilterChange({ category: '', priceRange: [0, 1000], rating: 0 });
  };

  return (
    <div style={styles.container}>
      <Filter onFilterChange={handleFilterChange} />
      <Sort onSortChange={handleSortChange} />
   
      <ProductList products={filteredProducts} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px'
  },
  productList: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column'
  },
  product: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px'
  }
};

export default ProductListing;
