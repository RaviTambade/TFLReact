// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav style={{ width: '250px', background: '#f4f4f4', padding: '20px' }}>
      <h2>Customer Dashboard</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/dashboard/account">Account Info</Link></li>
        <li><Link to="/dashboard/orders">Order History</Link></li>
        <li><Link to="/dashboard/wishlist">Wishlist</Link></li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
