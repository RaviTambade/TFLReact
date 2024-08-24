// Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import AccountInfo from './AccountInfo';
import OrderHistory from './OrderHistory';
import Wishlist from './Wishlist';
import Settings from './Settings';
import { Route, Routes } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <DashboardHeader />
        <Routes>
          <Route path="account" element={<AccountInfo />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
