import { useState } from 'react';

import { Layout } from "./components/Layout/component.jsx";
import { Restaurants } from "./components/Restaurants/components.jsx";

import { restaurants } from "../materials/mock.js";
import { Tabs } from "./components/Tabs/component.jsx";

export const App = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    function openTab (e) {
        setActiveTab(Number(e.target.dataset.index))
    }
    
    return (
        <Layout>
            {restaurants?.length
            ?
            <>
                <Tabs openTab={openTab} activeTab={activeTab} />
                {restaurants[activeTab] && <Restaurants restaurants={restaurants[activeTab]} />}
            </>
            :
            <p>Проблемы с данными</p>}
        </Layout>
    )
}
