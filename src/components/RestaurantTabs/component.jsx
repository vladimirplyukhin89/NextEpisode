import { Tab } from "../Tab/component.jsx";

export const RestaurantsTabs = ({ restaurants, onTabClick, activeTabIndex  }) => {

    return (
        <div className='tabs'>
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
