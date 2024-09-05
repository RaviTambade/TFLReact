// src/CombinedDataComponent.js
import React, { useEffect, useState } from 'react';

const UsersPostsPromise = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define the API endpoints
        const usersApi = 'http://localhost:7000/api/users';
        const postsApi = 'http://localhost:4000/api/posts';

        // Fetch data from both APIs concurrently
        const [usersResponse, postsResponse] = await Promise.all([
          fetch(usersApi),
          fetch(postsApi),
        ]);

        // Check if both responses are OK
        if (!usersResponse.ok) {
          throw new Error('Failed to fetch users');
        }
        if (!postsResponse.ok) {
          throw new Error('Failed to fetch posts');
        }

        // Parse JSON data from both responses
        const usersData = await usersResponse.json();
        const postsData = await postsResponse.json();

        // Update state with fetched data
        setUsers(usersData);
        setPosts(postsData);
      } catch (error) {
        setError(error.message); // Set error message if there is an error
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once on mount

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there's an error
  }

  return (
    <div>
      <h1>Users and Posts</h1>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li> // Adjust based on your API response
        ))}
      </ul>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li> // Adjust based on your API response
        ))}
      </ul>
    </div>
  );
};

export default UsersPostsPromise;
