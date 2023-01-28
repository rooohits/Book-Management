import { useState } from "react";
import "./counter.css"

export default function Counter() {

    const [count, setCount] = useState(0);

    function handleCountPlus(){
        setCount(prevCount => prevCount + 1);
    }

    function handleCountMinus(){
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div className="counter-container">
            <h1>Counter</h1> 
            <h1 className="count">{count}</h1>
            <button onClick={handleCountPlus}>+</button>
            <button onClick={handleCountMinus}>-</button>
        </div>      
    )
}