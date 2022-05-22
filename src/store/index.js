

// ==============================|| REDUX - MAIN STORE ||============================== //

import { configureStore } from "@reduxjs/toolkit";
import Api from "./api";
import user from "./slices/user";
import customizationReducer from './customizationReducer';
import notification from "./slices/notification";
export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
        user,
        customization: customizationReducer,
        notification,
    },
    middleware: (defaultMiddleware) =>
        defaultMiddleware().concat(Api.middleware),
});

