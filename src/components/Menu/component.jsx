import { Dish } from "../Dish/component.jsx";

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Меню</h3>
            {menu.map((dish) => (
                <div key={dish.id}>
                    <ul>
                        <li>
                          <Dish dish={dish.name} />
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}
