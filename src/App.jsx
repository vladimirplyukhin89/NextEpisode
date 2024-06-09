import { useState } from 'react';

import { Layout } from "./components/Layout/component.jsx";
import { Restaurants } from "./components/Restaurants/components.jsx";
import { Form } from './components/Form/component.jsx';

import { UserContextProvider } from "./context/user/provider.jsx";
import { ThemeContextProvider } from "./context/theme/provider.jsx";
import { useSelector } from "react-redux";
import { RestaurantsTabs } from "./components/RestaurantTabs/component.jsx";

export const App = () => {
    const restaurantIds = useSelector(state => state.restaurants.ids);
 
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);
    
    function onTabClick(id) {
        setActiveRestaurantId(id);
    }
    
    return (
        <UserContextProvider>
            <ThemeContextProvider>
                <Layout>
                    {restaurantIds?.length
                    ?
                    <>
                        <RestaurantsTabs
                            restaurantIds={restaurantIds}
                            onTabClick={onTabClick}
                            activeTabId={activeRestaurantId}
                        />
                        <Restaurants restaurantId={activeRestaurantId} />
                        <Form />
                    </>
                    :
                    <p>Проблемы с данными</p>}
                </Layout>
            </ThemeContextProvider>
        </UserContextProvider>
    )
}
