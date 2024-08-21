// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import ProductService from '../Services/ProductServiceFetch';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const data = await ProductService.getAllProducts();
            setProducts(data);
        } catch (err) {
            setError('Failed to fetch products');
        }
        };

        fetchProducts();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div>
        <h1>Todays Fresh Flowers</h1>
        <ul>
            {products.map(product => (
            <li key={product.id}>{product.title} {product.unitprice} {product.quantity}</li>
            ))}
        </ul>
        </div>
  );
};

export default ProductList;