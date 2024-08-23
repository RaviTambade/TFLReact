// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
      <Link to="/">Home</Link> | <Link to="/products">Flowers</Link>|
      |<Link to="/customers">Customers</Link>|
      <Link to="/dashboard">Dashboard</Link>|<Link to="/about">About</Link>|
      <Link to="/contact">Contact</Link>|
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link> |
      <Link to="/tap">Tap</Link>
    </nav>
);

export default NavBar;
