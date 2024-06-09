import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../materials/normalized-mock.js";

export const DishesSlice = createSlice({
    name: 'dishes',
    initialState: {
         entities: normalizedDishes.reduce((acc, dish) => {
             acc[dish.id] = dish;
             return acc;
         }, {}),
        ids: normalizedDishes.map((dish) => dish.id),
    }
})
