// RecentOrders.js
import React from 'react';

const orders = [
  { id: 1, customer: 'John Doe', total: 99.99 },
  { id: 2, customer: 'Jane Smith', total: 150.00 },
  { id: 3, customer: 'Sam Johnson', total: 49.99 },
];

function RecentOrders() {
  return (
    <section style={{ marginBottom: '20px' }}>
      <h2>Recent Orders</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default RecentOrders;
