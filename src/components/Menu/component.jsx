import { Dish } from "../Dish/component.jsx";
import { Counter } from "../Counter/component.jsx";

export const Menu = ({ menu }) => {
    if (!menu) {
        return null
    }

    return (
        <div>
            {Boolean(menu?.length) && (
                <>
                    <h3>Меню</h3>
                    <ul>
                        {menu.map((item) => (
                            <li key={item.id}>
                                {Boolean(item.name?.length) && <Dish name={item.name}/>}
                                <Counter />
                                {item.price}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
