import { useSelector } from "react-redux";

export const Dish = ({ dishId }) => {
    const dish = useSelector(state => state.dishes.entities[dishId])

    return (
        <span>{dish.name}</span>
    )
}
