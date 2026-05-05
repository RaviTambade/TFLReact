// StockAlerts.js
import React from 'react';

const stockAlerts = [
  { product: 'Product 1', stock: 5 },
  { product: 'Product 2', stock: 3 },
  { product: 'Product 3', stock: 10 },
];

function StockAlerts() {
  return (
    <section>
      <h2>Stock Alerts</h2>
      <ul>
        {stockAlerts.map((alert, index) => (
          <li key={index}>
            <strong>{alert.product}</strong> - Only {alert.stock} left
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StockAlerts;
