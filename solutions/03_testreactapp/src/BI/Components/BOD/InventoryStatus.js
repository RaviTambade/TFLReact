// InventoryStatus.js
import React from 'react';

const inventory = [
  { product: 'Product 1', stock: 20 },
  { product: 'Product 2', stock: 15 },
  { product: 'Product 3', stock: 5 },
];

function InventoryStatus() {
  return (
    <section style={{ marginBottom: '20px' }}>
      <h2>Inventory Status</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default InventoryStatus;
