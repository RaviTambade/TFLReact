 
  

  // asyncFunction.js
async function fetchData() {
    const response = await fetch('http://localhost:7000/api/users');
    return response.json();
  }
  
  module.exports = fetchData;

  