
export const fetchData = async () => {

 return [
        { id: 1, name: "Ravi", email: "ravi@example.com" },
        { id: 2, name: "Amit", email: "amit@example.com" },
        { id: 3, name: "Sneha", email: "sneha@example.com" },
        { id: 4, name: "Priya", email: "priya@example.com" }
    ];

   /* const response = await fetch('http://localhost:7000/api/users');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();*/

  };
  