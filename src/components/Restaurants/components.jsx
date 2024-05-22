import { Menu } from "../Menu/component.jsx";
import { Reviews } from "../Reviews/component.jsx";

export const Restaurants = ({ restaurant }) => {
    if (!restaurant) {
        return null
    }
    
    const { name, menu, reviews } = restaurant
    
    return (
        <div style={{
            border: '2px solid green',
            borderRadius: '6px',
            marginBottom: '5px'
        }}>
            {Boolean(name?.length) && <h1>{name}</h1>}
            {Boolean(menu?.length) && <Menu menu={menu} />}
            {Boolean(reviews?.length) && <Reviews reviews={reviews} />}
        </div>
    )
}

