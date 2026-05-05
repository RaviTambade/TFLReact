// DashboardHeader.js
import React from 'react';

function DashboardHeader() {
  return (
    <header style={{ marginBottom: '20px' }}>
      <h1>Admin Dashboard</h1>
      <div style={{ textAlign: 'right' }}>
        <p>Welcome, Admin!</p>
        <p><button>Profile</button></p>
      </div>
    </header>
  );
}

export default DashboardHeader;
