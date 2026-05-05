// src/ParentComponent.js
import React, { useState } from 'react';
import SiblingA from './SiblingA';
import SiblingB from './SiblingB';

const Parent = () => {
  const [sharedData, setSharedData] = useState('Initial Data');

  return (
    <div>
      <h1>India</h1>
      <SiblingA setSharedData={setSharedData} />
      <SiblingB sharedData={sharedData} />
    </div>
  );
};

export default Parent;
