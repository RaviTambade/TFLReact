// src/Project.js

import React, { useState } from 'react';

const Product = () => {

//state
const [title, setTitle]=useState("");
const [price, setPrice]=useState("");

const handOnPress=()=>{
    console.log("button is pressed");
    let count=56;
    count++;
    if(count <=89){
            console.log("value is less than 90");
    }
    else{
            console.log('value is greater than 89');
    }

}

//rendering logic  :JSX 

//data binding, event binding
//code will create VDOM

  return (
    <div>
      <p>Title: {title}</p>
      <p>Price:{price}</p>
      <button onClick={handOnPress }>press me</button>
    </div>
  );
};

export default Product;