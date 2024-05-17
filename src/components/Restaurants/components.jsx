import { Menu } from "../Menu/component.jsx";
import { Reviews } from "../Reviews/component.jsx";

export const Restaurants = ({ restaurant }) => {
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
        </div>
    )
}

