// Router.js
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductList from './PrductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Header from './Header';
import Footer from './Footer';

function Router() {
  return (
        <MemoryRouter>
        <Header />
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        </MemoryRouter>
  );
}

export default Router;
