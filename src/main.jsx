import React from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";
import { Restaurants } from "./components/Restaurants/components.jsx"
import { Layout } from "./components/Layout/component.jsx"

const root = createRoot(document.getElementById('root'))

root.render(
    <div>
        <Layout>
            {restaurants.map((restaurant) => (
                <Restaurants key={restaurant.id} restaurant={restaurant} />
            ))}
        </Layout>
    </div>
)
