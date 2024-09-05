// userService.js
function getUser(id) {
    // Simulates an API call
    return { id, name: 'John Doe' };
  }
  
  function formatUser(user) {
    return `User: ${user.name}`;
  }
  
  module.exports = { getUser, formatUser };
  