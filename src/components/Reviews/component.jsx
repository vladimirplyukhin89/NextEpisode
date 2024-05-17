import { Review } from "../Review/component.jsx";

export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Отзывы</h3>
            {reviews.map((review) => (
                <div key={review.id}>
                    <ul>
                        <li>
                            <Review review={review.text} />
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}
