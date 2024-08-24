// Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import SalesOverview from './SalesOverview';
import RecentOrders from './RecentOrders';
import InventoryStatus from './InventoryStatus';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <DashboardHeader />
        <SalesOverview />
        <RecentOrders />
        <InventoryStatus />
      </div>
    </div>
  );
}

export default Dashboard;
