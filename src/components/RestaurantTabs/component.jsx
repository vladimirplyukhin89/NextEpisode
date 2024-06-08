import { Tab } from "../Tab/component.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme.js";

export const RestaurantsTabs = ({ restaurants, onTabClick, activeTabIndex  }) => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className='tabs'>
            {
                restaurants.map((restaurant, index) => (
                    <Tab
                        key={restaurant.id}
                        theme={theme}
                        title={restaurant.name}
                        onClick={() => onTabClick(index)}
                        isActive={activeTabIndex === index}
                    />
                ))
            }
        </div>
    )
}
