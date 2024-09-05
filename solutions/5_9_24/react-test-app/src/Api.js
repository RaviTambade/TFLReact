// src/api.js
export const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };
  