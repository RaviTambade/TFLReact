// ShipmentDetails.js
import React from 'react';

const shipmentDetails = [
  { id: 1, orderId: 1, trackingNumber: 'XYZ123', status: 'In Transit' },
  { id: 2, orderId: 2, trackingNumber: 'ABC456', status: 'Delivered' },
  { id: 3, orderId: 3, trackingNumber: 'DEF789', status: 'Pending' },
];

function ShipmentDetails() {
  return (
    <section>
      <h2>Shipment Details</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order ID</th>
            <th>Tracking Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {shipmentDetails.map((shipment) => (
            <tr key={shipment.id}>
              <td>{shipment.id}</td>
              <td>{shipment.orderId}</td>
              <td>{shipment.trackingNumber}</td>
              <td>{shipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ShipmentDetails;
