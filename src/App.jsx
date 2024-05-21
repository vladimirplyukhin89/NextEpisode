import { Layout } from "./components/Layout/component.jsx";
import { restaurants } from "../materials/mock.js";
import { Restaurants } from "./components/Restaurants/components.jsx";

export const App = () => {
    return (
        <Layout>
            {restaurants?.length ? restaurants.map((restaurant) => (
                <Restaurants key={restaurant.id} restaurant={restaurant} />
            ))
            :
            <p>Проблемы с данными</p>}
        </Layout>
    )
}
