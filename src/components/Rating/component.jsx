import { useRating } from "../../hooks/useRating.jsx";

export const Rating = ({ totalRating = 5 }) => {
    const { selectedRating, setSelectedRating, createRatingArray } = useRating();
    
    return (
        <div>
            Rating:
            {createRatingArray(totalRating).map((_, index) => (
                <button
                    key={index}
                    type='button'
                    className={`${selectedRating > index ? 'tomato' : 'grey'} rating`}
                    onClick={() => setSelectedRating(index + 1)} />
            ))}
        </div>
    )
}
