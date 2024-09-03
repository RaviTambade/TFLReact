import React, { useState, useEffect } from 'react';
import OrderHistory from './OrderHistory';

// Simulate fetching user data from an API
const fetchUserData = () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Chiranjeet Patil',
        email: 'chiranjit.patil@gmail.com',
        address: '601 Pune Satara Raod,Pune',
        orders: [
          { id: 1, date: '2024-08-15', total: 59.99 },
          { id: 2, date: '2024-07-22', total: 89.49 },
        ],
      });
    }, 1000);
  });
};

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };

    getUserData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Account Information</h2>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Address:</strong> {userData.address}</p>
      </div>
      <OrderHistory orders={userData.orders} />
    </div>
  );
};

export default UserProfile;