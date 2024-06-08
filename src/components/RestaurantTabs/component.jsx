import { Tab } from "../Tab/component.jsx";

import s from './style.module.css';

export const RestaurantsTabs = ({ restaurants, onTabClick, activeTabIndex  }) => {
    return (
        <div className={s.root}>
            {
                restaurants.map((restaurant, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <Tab
                        title={restaurant.name}
                        onClick={() => onTabClick(index)}
                        isActive={activeTabIndex === index}
                    />
                ))
            }
        </div>
    )
}
