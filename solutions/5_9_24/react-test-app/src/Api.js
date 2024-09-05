
export const fetchData = async () => {
    const response = await fetch('http://localhost:7000/api/users');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };
  