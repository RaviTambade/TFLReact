// src/App.js
import React, { useState, useEffect, useRef } from 'react';

function LifeCycleHook() {

  const [count, setCount] = useState(0);
  const hasMounted = useRef(false); // to track if the component has mounted

  // useEffect with an empty dependency array to mimic componentDidMount
  useEffect(() => {
    console.log('useEffect: Component has been mounted');

    // Cleanup function to mimic componentWillUnmount
    return () => {
      console.log('useEffect Cleanup: Component is about to be unmounted');
    };
  }, []); // Empty dependency array means this runs only on mount and unmount

  // useEffect with dependencies to mimic componentDidUpdate
  useEffect(() => {
    if (hasMounted.current) {
      console.log('useEffect: Component has been updated');
    } else {
      hasMounted.current = true;
    }
  }, [count]); // Dependency array means this runs on updates to `count`

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  console.log('render: Component is rendering');

  return (
    <div>
      <h1>React Functional Component Lifecycle</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default LifeCycleHook;
