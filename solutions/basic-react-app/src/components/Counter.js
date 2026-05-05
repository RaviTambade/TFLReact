// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);

  //Rendering logic of react
  //React Engine: VDOM
  //JSX : React syntax:  to write HTML inside Javascript  (XML)
  //JSX: consist of data binding and event binding

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;




//HTML   : Hyper Text Markup Langauge
//         syntax is used to represent web page
//         syntax is used to define presentation
//         syntax is used to be parsed by HTML Redering engine of Browser


//XML    : pom.xml, config.xml, web.xml
//         settings, dependencies, data
//         syntax is used to describe data


//JSX