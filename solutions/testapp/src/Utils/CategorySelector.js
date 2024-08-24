// src/CategorySelector.js
import React, { useState } from 'react';

const CategorySelector = () => {
  // Initial list of categories
  const categories = ['Electronics','Books','Clothing','Home & Kitchen','Sports','Toys'];

  // State to keep track of selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle change events for checkboxes
  const handleCheckboxChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  return (
    <div>
      <h2>Select Categories</h2>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: '8px' }}>
            <input type="checkbox" value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCheckboxChange}/>
            {category}
        </div>
      ))}
      <div>
        <h3>Selected Categories:</h3>
        <ul>
          {selectedCategories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySelector;