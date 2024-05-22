import { Review } from "../Review/component.jsx";

export const Reviews = ({ reviews }) => {
    if (!reviews) {
        return null
    }
    
    return (
        <div>
            {Boolean(reviews?.length) && (
                <>
                    <h3>Отзывы</h3>
                    <ul>
                        {reviews.map(({id, text}) => (
                            <li key={id}>
                                {Boolean(text?.length) && <Review text={text}/>}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
