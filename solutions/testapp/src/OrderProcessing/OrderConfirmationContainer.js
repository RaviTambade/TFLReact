// src/App.js
import React from 'react';
import OrderConfirmation from './OrderConfirmation';

// Example order data
const orderData = {
  orderId: '1234567890',
  orderDate: '2024-08-23T14:30:00Z',
  items: [
    { id: 1, name: 'Product A', quantity: 2, price: 29.99 },
    { id: 2, name: 'Product B', quantity: 1, price: 49.99 },
  ],
  total: 109.97,
  shippingAddress: '123 Main St, Anytown, USA',
};

const OrderConfirmationContainer = () => {
  return (
    <div style={{ padding: '20px' }}>
      <OrderConfirmation order={orderData} />
    </div>
  );
};

export default OrderConfirmationContainer;
