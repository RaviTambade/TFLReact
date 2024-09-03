// src/App.js
import React, { Suspense, lazy } from 'react';

// Lazy load the HeavyComponent
const HeavyComponent = lazy(() => import('./HeavyComponent'));

const LazyLoader = () => {
  return (
    <div>
      <h1>Lazy Loading</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default LazyLoader;
