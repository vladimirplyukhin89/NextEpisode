import { Review } from "../Review/component.jsx";

import s from './style.module.css';

export const Reviews = ({ reviews }) => {
    if (!reviews) {
        return null
    }
    
    return (
        <div className={s.root}>
            {Boolean(reviews?.length) && (
                <>
                    <h3>Reviews</h3>
                    <ul className={s.reviews}>
                        {reviews.map(({id, text}) => (
                            <li className={s.review} key={id}>
                                {Boolean(text?.length) && <Review text={text}/>}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
