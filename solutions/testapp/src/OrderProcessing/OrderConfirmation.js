// src/OrderConfirmation.js
import React from 'react';

// Example OrderConfirmation component
const OrderConfirmation = ({ order }) => {
  if (!order) {
    return <p>No order data available.</p>;
  }

  const { orderId, items, total, shippingAddress, orderDate } = order;

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h1>Order Confirmation</h1>
      <p><strong>Order ID:</strong> {orderId}</p>
      <p><strong>Order Date:</strong> {new Date(orderDate).toLocaleDateString()}</p>
      
      <h2>Items Purchased</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <p><strong>Product:</strong> {item.name}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>

      <p><strong>Total Amount:</strong> ${total.toFixed(2)}</p>

      <h2>Shipping Address</h2>
      <p>{shippingAddress}</p>
      
      <div style={{ marginTop: '20px' }}>
        <p>Thank you for your purchase! You will receive a confirmation email with further details.</p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
