
import {  useDispatch, useSelector } from "react-redux";

import {
    removeNotification,
    setNotification,
} from "./slices/notification";
import { removeUser, setUser } from "./slices/user";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector= useSelector;


export const useUser = () => {
    const dispatch = useAppDispatch(),
        user = useAppSelector((state) => state.user),
        set = (user) => {
            dispatch(setUser(user));
        },
        remove = () => {
            dispatch(removeUser());
        };
    return { setUser: set, user, removeUser: remove };
};
export const useNotification= () => {
    const dispatch = useAppDispatch(),
        notification = useAppSelector(
            (state) => state.notification
        ) ,
        set = ({
            title,
            description,
            type,
            timeOut = 10000,
        }) => {
            dispatch(
                setNotification({
                    title,
                    description,
                    type,
                    timeOut,
                })
            );
        },
        error = (err, timeOut = 10000) => {
            err = err.data ? err.data : err;
            dispatch(
                setNotification({
                    title: err.Name ?? "Unknown Error",
                    description: err.message ?? "Please try again",
                    type: "error",
                    timeOut,
                })
            );
        },
        closeNotification = () => {
            dispatch(removeNotification());
        };
    return { Notify: set, notification, closeNotification, Errofy: error };
};