// Settings.js
import React, { useState } from 'react';

function Settings() {
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123-456-7890');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., update user info)
    alert('Settings updated!');
  };

  return (
    <section>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </section>
  );
}

export default Settings;
