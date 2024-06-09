import { useState } from 'react';

import { Layout } from "./components/Layout/component.jsx";
import { Restaurants } from "./components/Restaurants/components.jsx";
import { Form } from './components/Form/component.jsx';

import { restaurants } from "../materials/mock.js";
import { RestaurantsTabs } from "./components/RestaurantTabs/component.jsx";
import { UserContextProvider } from "./context/user/provider.jsx";
import { ThemeContextProvider } from "./context/theme/provider.jsx";

export const App = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    const activeRestaurant = restaurants[activeRestaurantIndex];
    
    function onTabClick(index) {
        setActiveRestaurantIndex(index);
    }
    
    return (
        <UserContextProvider>
            <ThemeContextProvider>
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
                        <Form />
                    </>
                    :
                    <p>Проблемы с данными</p>}
                </Layout>
            </ThemeContextProvider>
        </UserContextProvider>
    )
}
