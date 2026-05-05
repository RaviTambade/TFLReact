// SalesOverview.js
import React from 'react';

function SalesOverview() {
  // Dummy data
  const totalSales = 15000;
  const orders = 300;

  return (
    <section style={{ marginBottom: '20px' }}>
      <h2>Sales Overview</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h3>Total Sales</h3>
          <p>${totalSales}</p>
        </div>
        <div>
          <h3>Total Orders</h3>
          <p>{orders}</p>
        </div>
      </div>
      {/* Replace with a chart library in a real application */}
    </section>
  );
}

export default SalesOverview;
