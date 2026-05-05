// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav style={{ width: '250px', background: '#f0f0f0', padding: '20px' }}>
      <h2>Dashboard</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/dashboard/sales">Sales</Link></li>
        <li><Link to="/dashboard/orders">Orders</Link></li>
        <li><Link to="/dashboard/users">Users</Link></li>
        <li><Link to="/dashboard/stock">Stock</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
