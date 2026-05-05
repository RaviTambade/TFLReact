import React, { useState, useEffect } from "react";

const Timer = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Time: {count}</h1>
    </div>
  );
};

export default Timer;


