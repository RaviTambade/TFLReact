// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav style={{ width: '250px', background: '#f4f4f4', padding: '20px' }}>
      <h2>Dashboard</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/dashboard/sales">Sales Overview</Link></li>
        <li><Link to="/dashboard/orders">Recent Orders</Link></li>
        <li><Link to="/dashboard/inventory">Inventory Status</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
