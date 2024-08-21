// src/components/UpdateProduct.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../services/ProductService';

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await ProductService.getProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch product');
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await ProductService.updateProduct(id, product);
      alert('Product updated successfully!');
    } catch (err) {
      setError('Failed to update product');
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default UpdateProduct;
