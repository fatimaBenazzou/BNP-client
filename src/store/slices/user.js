import { createSlice } from "@reduxjs/toolkit";


const initial_state = JSON.parse(
    localStorage.getItem("User") || "null"
);

const user = createSlice({
    name: "user",
    initialState: initial_state,
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("User", JSON.stringify(action.payload));
            state = action.payload ?? null;
            return state;
        },
        removeUser: (state) => {
            localStorage.removeItem("User");
            state = null;
            return state;
        },
    },
});

export const { setUser, removeUser  } = user.actions;

export default user.reducer;