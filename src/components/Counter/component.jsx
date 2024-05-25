import { useState, useEffect, useCallback } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount((currentCount) => currentCount + 1);
    }, []);
    
    const decrement = useCallback(() => {
        setCount((currentCount) => currentCount - 1);
    }, [])
    
    return {count, increment, decrement}
    
}

export const Counter = ({ min = 0, max = 5 }) => {
    const { count, decrement, increment } = useCounter();
    
    useEffect(() => {
        // decrement()
    }, [])
    
    return (
        <div>
            <button onClick={decrement} disabled={count === min}>-</button>
            <span>{count}</span>
            <button onClick={increment} disabled={count === max}>+</button>
        </div>
    )
}
