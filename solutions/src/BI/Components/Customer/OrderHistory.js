// OrderHistory.js
import React from 'react';

const orders = [
  { id: 1, date: '2024-01-15', total: 99.99, status: 'Shipped' },
  { id: 2, date: '2024-02-10', total: 150.00, status: 'Delivered' },
  { id: 3, date: '2024-03-05', total: 49.99, status: 'Pending' },
];

function OrderHistory() {
  return (
    <section>
      <h2>Order History</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default OrderHistory;
