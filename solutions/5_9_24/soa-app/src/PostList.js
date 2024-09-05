// src/PostList.js
import React, { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]); // State to store posts data
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await  fetch('http://localhost:4000/api/posts');; // API endpoint to fetch posts
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data); // Update state with fetched data
      } catch (error) {
        setError(error.message); // Set error message if there's an error
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this useEffect runs once on mount

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there's an error
  }

  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
