import { useState } from 'react';

import { Layout } from "./components/Layout/component.jsx";
import { Restaurants } from "./components/Restaurants/components.jsx";

import { restaurants } from "../materials/mock.js";
import { RestaurantsTabs } from "./components/RestaurantTabs/component.jsx";

export const App = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)
    const activeRestaurant = restaurants[activeRestaurantIndex]
    
    
    function onTabClick(index) {
        setActiveRestaurantIndex(index)
    }
    
    return (
        <Layout>
            {restaurants?.length
            ?
            <>
                <RestaurantsTabs
                    restaurants={restaurants}
                    onTabClick={onTabClick}
                    activeTabIndex={activeRestaurantIndex}
                />
                <Restaurants restaurants={activeRestaurant} />
            </>
            :
            <p>Проблемы с данными</p>}
        </Layout>
    )
}
