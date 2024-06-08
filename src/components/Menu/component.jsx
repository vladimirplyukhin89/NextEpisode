import { Dish } from "../Dish/component.jsx";

import s from './style.module.css';

export const Menu = ({ menu }) => {
    if (!menu) {
        return null
    }
    
    return (
        <div className={s.root}>
            {Boolean(menu?.length) && (
                <>
                    <h3>Menu</h3>
                    <ul className={s.menu}>
                        {menu.map((item) => (
                            <li className={s.dish} key={item.id}>
                                {Boolean(item.name?.length) && <Dish name={item.name}/>}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
