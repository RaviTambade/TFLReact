
import React, { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Likes: {count}</p>
            <button onClick={() => setCount(count - 1)}> -</button>
            <input type="text" value={count} onChange={(e) => setCount(parseInt(e.target.value))} />
            <button onClick={() => setCount(count + 1)}> +</button>
        </div>
    );
}

export default Counter;