import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../materials/normalized-mock.js";

export const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        entities: normalizedUsers.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
        }, {}),
        ids: normalizedUsers.map((user) => user.id),
    },
})
