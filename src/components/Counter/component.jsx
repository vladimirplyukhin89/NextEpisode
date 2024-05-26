import { useCounter } from "../../hooks/useCounter.jsx";

export const Counter = () => {
    const { count, decrement, increment } = useCounter();
    
    return (
        <div>
            <button onClick={decrement} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button onClick={increment} disabled={count === 5}>+</button>
        </div>
    )
}
