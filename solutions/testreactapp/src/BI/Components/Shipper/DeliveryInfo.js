// DeliveryInfo.js
import React from 'react';

const deliveryInfo = [
  { id: 1, orderId: 1, address: '123 Main St', deliveryDate: '2024-01-20' },
  { id: 2, orderId: 2, address: '456 Oak Ave', deliveryDate: '2024-02-15' },
  { id: 3, orderId: 3, address: '789 Pine Rd', deliveryDate: '2024-03-10' },
];

function DeliveryInfo() {
  return (
    <section>
      <h2>Delivery Information</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order ID</th>
            <th>Address</th>
            <th>Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {deliveryInfo.map((info) => (
            <tr key={info.id}>
              <td>{info.id}</td>
              <td>{info.orderId}</td>
              <td>{info.address}</td>
              <td>{info.deliveryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default DeliveryInfo;
