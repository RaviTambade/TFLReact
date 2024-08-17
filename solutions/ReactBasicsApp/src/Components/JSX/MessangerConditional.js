import React from 'react';

function MessangerConditional({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please sign up.</p>}
    </div>
  );
}

export default MessangerConditional;
