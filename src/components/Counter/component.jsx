import { useCounter } from "../../hooks/useCounter.jsx";
import { Button } from "../Button/component.jsx";

export const Counter = () => {
    const { count, decrement, increment } = useCounter();
    
    return (
        <div>
            <Button onClick={decrement} disabled={count === 0}>-</Button>
            <span>{count}</span>
            <Button onClick={increment} disabled={count === 5}>+</Button>
        </div>
    )
}
