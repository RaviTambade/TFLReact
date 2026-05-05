// Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import SalesChart from './SalesChart';
import OrderSummary from './OrderSummary';
import UserActivity from './UserActivity';
import StockAlerts from './StockAlerts';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <DashboardHeader />
        <SalesChart />
        <OrderSummary />
        <UserActivity />
        <StockAlerts />
      </div>
    </div>
  );
}

export default Dashboard;
