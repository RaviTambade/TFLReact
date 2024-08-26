import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams(); // Extract the userId parameter from the URL

  return (
    <div>
      <h1>User Detail Page</h1>
      <p>User Id: {userId}</p>
      <p>First Name: Ravi</p>
      <p>Last Name: Tambade</p>
      <p>Email: ravi.tambade@transflower.in</p>
      <p>Contact Number:9881735801</p>
    </div>
  );
};

export default UserDetail;
