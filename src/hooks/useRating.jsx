import { useCallback, useState } from "react";

export const useRating = ({ initialValue = 3 } = {}) => {
    const [selectedRating, setSelectedRating] = useState(initialValue);
    
    const createRatingArray = useCallback((length) => Array(length).fill(length), []);
    
    return { selectedRating, setSelectedRating, createRatingArray };
}
