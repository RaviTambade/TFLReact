import React, {useEffect, useState } from 'react';

//Function Component

const CounterJ=(props)=>{
    console.log("Counet component initialization");
    const [count, setCount]=useState(0);

    const increment = () => {
    setCount(count+1);
    console.log("Increment is getting called.");
    };

    useEffect(()=>{
        console.log("Effect is called....");
    },[count])
 
    return (
      <div>
        {
            console.log("rendering counter ....")
        }
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
      </div>
    );
 
  
}
export default CounterJ;