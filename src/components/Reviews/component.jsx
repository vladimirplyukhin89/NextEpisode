import { Review } from "../Review/component.jsx";

export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map((review) => (
                <li key={review.id}>
                    <Review review={review.text} />
                </li>
                ))}
            </ul>
        </div>
    )
}
