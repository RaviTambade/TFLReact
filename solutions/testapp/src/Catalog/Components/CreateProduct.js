// src/components/CreateProduct.js

import React, { useState } from 'react';
import ProductService from '../services/ProductService';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newProduct = { name };
      await ProductService.createProduct(newProduct);
      alert('Product created successfully!');
      setName('');
    } catch (err) {
      setError('Failed to create product');
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Create</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default CreateProduct;
