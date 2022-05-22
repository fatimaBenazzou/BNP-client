import { createSlice } from "@reduxjs/toolkit";



const initial_state = null;
const notifications = createSlice({
    name: "notifications",
    initialState: initial_state,
    reducers: {
        // @ts-ignore
        setNotification: (
            state,
            {
                payload: { title, description, type, timeOut },
            }
        ) => {
            return {
                title,
                description,
                type,
                timeOut,
            };
        },
        removeNotification: (state) => {
            state = null;
            return state;
        },
    },
});

export const { setNotification, removeNotification } = notifications.actions;

export default notifications.reducer;