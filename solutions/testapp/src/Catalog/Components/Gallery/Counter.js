import { useState } from "react";
//              value,callback, callback
const Counter=({likes,onCounterLike,onCounterUnLike})=>{
   
    const [count,setCount]=useState(likes);


    //event handlers
    const increment=()=>{
        setCount(count+1); 
        onCounterLike(count);
    }

    const decrement=()=>{
        setCount(count-1); 
        onCounterUnLike(count);
    }

    return(
        <div>  
             <button onClick={decrement}>Unlike</button>
                <label>Likes :{count}</label>
              <button onClick={increment}>Like</button>
        </div>
    )
}

export default Counter;