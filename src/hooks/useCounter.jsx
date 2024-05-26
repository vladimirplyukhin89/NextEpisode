import { useCallback, useState } from "react";

export const useCounter = ({ initialValue = 0, min = 0, max = 6 } = {}) => {
    const [count, setCount] = useState(initialValue);
    
    const increment = useCallback(() => {
        setCount((currentCount) =>
            currentCount === max ? currentCount : currentCount + 1
        );
    }, [max]);
    
    const decrement = useCallback(() => {
        setCount((currentCount) =>
            currentCount === min ? currentCount : currentCount - 1
        );
    }, [min]);
    
    return { count, increment, decrement };
}
