import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const User = () => {
  return (
    <div>
      <h1>User Page</h1>
      <nav>
        <Link to="profile">Profile</Link>|<Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* This will render nested routes */}
    </div>
  );
};

export default User;
