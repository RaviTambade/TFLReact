// SalesChart.js
import React from 'react';

function SalesChart() {
  // Dummy data for the chart
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [1000, 1200, 800, 1500, 2000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <section style={{ marginBottom: '20px' }}>
      <h2>Sales Chart</h2>
      {/* Placeholder for a chart */}
      <div style={{ height: '300px', backgroundColor: '#eaeaea' }}>
        <p>Chart goes here</p>
      </div>
    </section>
  );
}

export default SalesChart;
