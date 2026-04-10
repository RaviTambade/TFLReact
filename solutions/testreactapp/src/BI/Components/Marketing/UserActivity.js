// UserActivity.js
import React from 'react';

const activities = [
  { user: 'Alice', action: 'Logged in', time: '2 hours ago' },
  { user: 'Bob', action: 'Placed an order', time: '3 hours ago' },
  { user: 'Charlie', action: 'Updated profile', time: '5 hours ago' },
];

function UserActivity() {
  return (
    <section style={{ marginBottom: '20px' }}>
      <h2>Recent User Activity</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <strong>{activity.user}</strong> {activity.action} <em>{activity.time}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserActivity;
