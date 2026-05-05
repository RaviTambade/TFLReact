// src/Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState(0);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilterChange({ category: event.target.value, priceRange, rating });
  };

  const handlePriceRangeChange = (event) => {
    const [min, max] = event.target.value.split(',').map(Number);
    setPriceRange([min, max]);
    onFilterChange({ category, priceRange: [min, max], rating });
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
    onFilterChange({ category, priceRange, rating: Number(event.target.value) });
  };

  return (
    <div style={styles.container}>
      <h3>Filter Products</h3>
      <div style={styles.filterGroup}>
        <label>Category:</label>
        <select value={category} onChange={handleCategoryChange} style={styles.select}>
          <option value="">All</option>
          <option value="flowers">Flowers</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
        </select>
      </div>
      <div style={styles.filterGroup}>
        <label>Price Range:</label>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange.join(',')}
          onChange={handlePriceRangeChange}
          style={styles.rangeInput}
        />
        <div>Price: ${priceRange[0]} - ${priceRange[1]}</div>
      </div>
      <div style={styles.filterGroup}>
        <label>Rating:</label>
        <input
          type="number"
          min="0"
          max="5"
          value={rating}
          onChange={handleRatingChange}
          style={styles.input}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    margin: '20px 0'
  },
  filterGroup: {
    marginBottom: '15px'
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd'
  },
  rangeInput: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd'
  }
};

export default Filter;
