// OrderList.js
import React from 'react';

const orders = [
  { id: 1, customer: 'Alice', date: '2024-01-15', status: 'Pending' },
  { id: 2, customer: 'Bob', date: '2024-02-10', status: 'Shipped' },
  { id: 3, customer: 'Charlie', date: '2024-03-05', status: 'Pending' },
];

function OrderList() {
  return (
    <section>
      <h2>Order List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default OrderList;
