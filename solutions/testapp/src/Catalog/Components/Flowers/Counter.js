import { useState,useEffect  } from "react";

const Counter=({likes,onCounterClick})=>{

    const [count,setCount]=useState(likes);
   
    const increment=()=>{
        setCount(count+1);
        onCounterClick(count);
    }

   const decrement=()=>{
        setCount(count-1);
        onCounterClick(count);
    }

    
    // Notify parent component of the count change
    /********* without this  we would no get result
     * ************ */
    useEffect(() => {
        onCounterClick(count);
    }, [count, onCounterClick]);



    return(
        <div>  
            <button onClick={decrement}>-</button>
            <label>{count}</label>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;