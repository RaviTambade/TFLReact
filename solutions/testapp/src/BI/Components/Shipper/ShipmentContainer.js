// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShipperDashboard from './ShipperDashboard';

function ShipmentDashboardContainer() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<ShipperDashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default ShipmentDashboardContainer;
