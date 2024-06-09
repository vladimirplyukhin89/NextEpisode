import { useSelector } from "react-redux";

export const Review = ({ reviewId }) => {
    const review = useSelector(state => state.reviews.entities[reviewId]);
    
    return (
        <span>{review.text}</span>
    )
}

