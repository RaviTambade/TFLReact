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
             <button onClick={decrement}> <i class="fa fa-thumbs-o-down" ></i></button>
                <label>Likes :{count}</label>
                <button onClick={increment}> <i class="fa fa-thumbs-o-up" ></i></button>
        </div>
    )
}

export default Counter;