import { Tab } from "../Tab/component.jsx";

import s from './style.module.css';

export const RestaurantsTabs = ({ restaurants, onTabClick, activeTabIndex  }) => {
    return (
        <div className={s.root}>
            {
                restaurants.map((restaurant, index) => (
                    <Tab
                        key={restaurant.id}
                        title={restaurant.name}
                        onClick={() => onTabClick(index)}
                        isActive={activeTabIndex === index}
                    />
                ))
            }
        </div>
    )
}
