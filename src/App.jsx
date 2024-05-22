import { useState } from 'react';

import { Layout } from "./components/Layout/component.jsx";
import { Restaurants } from "./components/Restaurants/components.jsx";

import { restaurants } from "../materials/mock.js";

export const App = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    function openActiveTab (e) {
        setActiveTab(Number(e.target.dataset.index))
    }
    
    return (
        <Layout>
            {restaurants?.length
            ?
            <div>
                <div className='tabs'>
                    {
                        restaurants.map((restaurant, index) => (
                            <div key={restaurant.id}>
                                {Boolean(restaurant?.name?.length)
                                    && <button
                                    className={restaurant.id === activeTab ? 'active' : ''}
                                    data-index={index}
                                    onClick={openActiveTab}
                                >{restaurant.name}</button>}
                            </div>
                        ))
                    }
                </div>
                {restaurants[activeTab] && <Restaurants restaurants={restaurants[activeTab]} />}
            </div>
            :
            <p>Проблемы с данными</p>}
        </Layout>
    )
}
