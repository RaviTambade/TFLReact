// src/MergedDataComponent.js
import React, { useEffect, useState } from 'react';

const UsersPosts = () => {
  const [data, setData] = useState({ users: [], posts: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch('http://localhost:7000/api/users');
        const usersData = await usersResponse.json();

        const postsResponse = await fetch('http://localhost:4000/api/posts');
        const postsData = await postsResponse.json();

        setData({ users: usersData, posts: postsData });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users and Posts</h1>
      <h2>Users</h2>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Posts</h2>
      <ul>
        {data.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPosts;
