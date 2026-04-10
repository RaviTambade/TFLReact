import React from 'react';
import { useNavigate } from 'react-router-dom';

const Vendor = () => {
  const navigate = useNavigate();

  const handleClick = (vendorId) => {
    navigate(`/vendor/${vendorId}`);
  };

  return (
    <div>
      <h1>Vendor Page</h1>
      <button onClick={() => handleClick(1)}>Go to Vendor 1</button>
      <button onClick={() => handleClick(2)}>Go to Vendor 2</button>
    </div>
  );
};

export default Vendor;
