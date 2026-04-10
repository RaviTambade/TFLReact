// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav style={{ width: '250px', background: '#f4f4f4', padding: '20px' }}>
      <h2>Shipper Dashboard</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/dashboard/orders">Order List</Link></li>
        <li><Link to="/dashboard/shipments">Shipment Details</Link></li>
        <li><Link to="/dashboard/update-status">Update Order Status</Link></li>
        <li><Link to="/dashboard/delivery-info">Delivery Info</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
