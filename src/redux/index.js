import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { UsersSlice } from "./entities/users.js";
import { ReviewsSlice } from "./entities/reviews.js";
import { DishesSlice } from "./entities/dishes.js";
import { RestaurantsSlice } from "./entities/restaurants.js";

export const store = configureStore({
    reducer: combineSlices(UsersSlice, ReviewsSlice, RestaurantsSlice, DishesSlice),
});

console.log(store.getState())
