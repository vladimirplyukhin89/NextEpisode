import { Dish } from "../Dish/component.jsx";
import { Counter } from "../Counter/component.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/user.js";

export const Menu = ({ menu }) => {
    const { currentUser } = useContext(AuthContext);
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
                                {currentUser?.name?.length ? <Counter /> : null}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
