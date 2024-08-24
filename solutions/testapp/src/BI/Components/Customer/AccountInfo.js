// AccountInfo.js
import React from 'react';

function AccountInfo() {
  // Dummy data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  };

  return (
    <section>
      <h2>Account Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </section>
  );
}

export default AccountInfo;
