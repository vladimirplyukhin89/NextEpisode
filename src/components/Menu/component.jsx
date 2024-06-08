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
                            // eslint-disable-next-line react/jsx-key
                            <li className={s.dish}>
                                {Boolean(item.name?.length) && <Dish name={item.name}/>}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
