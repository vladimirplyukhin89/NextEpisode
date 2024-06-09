import { Button } from "../Button/component.jsx";
import { useSelector } from "react-redux";

export const Tab = ({ restaurantId, onClick, isActive }) => {
    const restaurants = useSelector(state => state.restaurants.entities[restaurantId])
    
    return (
        <Button
            onClick={onClick}
            disabled={isActive}
        >
            {restaurants.name}
        </Button>
    )
}
