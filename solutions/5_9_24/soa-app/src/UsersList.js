// src/UserList.js
import React, { useEffect, useState } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/users'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data); // Update state with fetched data
      } catch (error) {
        setError(error.message); // Set error message in case of failure
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this useEffect runs once on mount

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there's an error
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li> // Replace user.name with the appropriate field
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
