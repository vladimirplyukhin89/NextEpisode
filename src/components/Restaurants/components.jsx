import { Menu } from "../Menu/component.jsx";
import { Reviews } from "../Reviews/component.jsx";

import s from './style.module.css'
import { useSelector } from "react-redux";

export const Restaurants = ({ restaurantId }) => {
    const restaurant = useSelector(
        state => state.restaurants.entities[restaurantId]
    );
    
    if(!restaurant) {
        return null;
    }
    
    const { name, menu, reviews } = restaurant

    return (
        <div className={s.root}>
            {Boolean(name?.length) && <h1>{name}</h1>}
            {Boolean(menu?.length) && <Menu menuIds={menu} />}
            {Boolean(reviews?.length) && <Reviews reviewsIds={reviews} />}
        </div>
    )
}

