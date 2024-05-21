import { Dish } from "../Dish/component.jsx";

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                {menu.map((dish) => (
                <li key={dish.id}>
                  <Dish dish={dish.name} />
                </li>
                ))}
            </ul>
        </div>
    )
}
