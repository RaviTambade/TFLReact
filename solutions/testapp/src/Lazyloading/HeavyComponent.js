// src/HeavyComponent.js
import React from 'react';

const HeavyComponent = () => {
  return (
    <div>
      <h1>This is a heavy component.</h1>
      <p>It is loaded only when needed.</p>
    </div>
  );
};

export default HeavyComponent;
