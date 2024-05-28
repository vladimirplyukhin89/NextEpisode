import { Menu } from "../Menu/component.jsx";
import { Reviews } from "../Reviews/component.jsx";

export const Restaurants = ({ restaurants }) => {
    if(!restaurants) {
        return null;
    }
    
    const { name, menu, reviews } = restaurants

    return (
        <div>
            {Boolean(name?.length) && <h1>{name}</h1>}
            {Boolean(menu?.length) && <Menu menu={menu} />}
            {Boolean(reviews?.length) && <Reviews reviews={reviews} />}
        </div>
    )
}

