import { Tab } from "../Tab/component.jsx";

import s from './style.module.css';

export const RestaurantsTabs = ({ restaurantIds, onTabClick, activeTabId  }) => {

    return (
        <div className={s.root}>
            {
                restaurantIds.map((id) => (
                    // eslint-disable-next-line react/jsx-key
                    <Tab
                        onClick={() => onTabClick(id)}
                        isActive={activeTabId === id}
                        restaurantId={id}
                    />
                ))
            }
        </div>
    )
}
