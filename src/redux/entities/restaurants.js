import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../materials/normalized-mock.js";

export const RestaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        entities: normalizedRestaurants.reduce((acc, restaurant) => {
            acc[restaurant.id] = restaurant;
            return acc;
        }, {}),
        ids: normalizedRestaurants.map((restaurant) => restaurant.id),
    },
});
