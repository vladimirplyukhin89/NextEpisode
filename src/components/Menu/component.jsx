import { Dish } from "../Dish/component.jsx";

import s from './style.module.css';

export const Menu = ({ menuIds }) => {
    if (!menuIds) {
        return null
    }
    
    return (
        <div className={s.root}>
            {Boolean(menuIds?.length) && (
                <>
                    <h3>Menu</h3>
                    <ul className={s.menu}>
                        {menuIds.map((id) => (
                            // eslint-disable-next-line react/jsx-key
                            <li className={s.dish}>
                                <Dish dishId={id}/>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
