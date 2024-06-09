import { Review } from "../Review/component.jsx";

import s from './style.module.css';

export const Reviews = ({ reviewsIds }) => {
    if (!reviewsIds) {
        return null
    }
    
    return (
        <div className={s.root}>
            {Boolean(reviewsIds?.length) && (
                <>
                    <h3>Reviews</h3>
                    <ul className={s.reviews}>
                        {reviewsIds.map((id) => (
                            // eslint-disable-next-line react/jsx-key
                            <li className={s.review} >
                                <Review reviewId={id}/>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
