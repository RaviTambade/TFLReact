// src/SiblingA.js
import React from 'react';

const SiblingA = ({ setSharedData }) => {
  const updateData = () => {
    setSharedData('Data updated by Sibling A');
  };

  return (
    <div>
      <h2>Sibling A</h2>
      <button onClick={updateData}>Update Shared Data</button>
    </div>
  );
};

export default SiblingA;
