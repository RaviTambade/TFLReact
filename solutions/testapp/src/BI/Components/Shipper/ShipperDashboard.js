// ShipperDashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import OrderList from './OrderList';
import ShipmentDetails from './ShipmentDetails';
import UpdateOrderStatus from './UpdateOrderStatus';
import DeliveryInfo from './DeliveryInfo';
import { Route, Routes } from 'react-router-dom';

function ShipperDashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <DashboardHeader />
        <Routes>
          <Route path="orders" element={<OrderList />} />
          <Route path="shipments" element={<ShipmentDetails />} />
          <Route path="update-status" element={<UpdateOrderStatus />} />
          <Route path="delivery-info" element={<DeliveryInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default ShipperDashboard;
