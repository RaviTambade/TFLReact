import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div>
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table>
          {orders.map(order => (
            <tr key={order.id} style={{ marginBottom: '10px' }}>
              <td><strong>Order ID:</strong> {order.id}</td>
              <td><strong>Date:</strong> {order.date}</td>
              <td><strong>Total:</strong> ₹{order.total.toFixed(2)}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default OrderHistory;