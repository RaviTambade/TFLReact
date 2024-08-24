// UpdateOrderStatus.js
import React, { useState } from 'react';

function UpdateOrderStatus() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., update order status in database)
    alert(`Order ${orderId} status updated to ${status}`);
  };

  return (
    <section>
      <h2>Update Order Status</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Order ID:
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Status:
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </label>
        </div>
        <button type="submit">Update Status</button>
      </form>
    </section>
  );
}

export default UpdateOrderStatus;
