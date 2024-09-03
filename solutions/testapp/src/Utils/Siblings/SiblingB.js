// src/SiblingB.js
import React from 'react';

const SiblingB = ({ sharedData }) => {
  return (
    <div>
      <h2>Sibling B</h2>
      <p>Shared Data: {sharedData}</p>
    </div>
  );
};

export default SiblingB;
