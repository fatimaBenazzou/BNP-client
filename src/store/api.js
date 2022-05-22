import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        
        baseUrl: "http://localhost:3001/",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        /******************************** User ********************************/
        /* Sign In */
        signIn: builder.mutation({
            query: ({ body }) => ({
                url: "/login",
                method: "POST",
                body,
            }),
        }),
        /* Sign Up / Register */
        signUp: builder.mutation({
            query: ({ body }) => ({
                url: "/signup",
                method: "POST",
                body,
            }),
        }),
        /* Log out */
        logOut: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST",
            }),
        }),
        /* Get User Data */
        getUserData: builder.mutation({
            query: () => ({ url: "/", method: "GET" }),
        }),
        /* Edit User Data */
        editUser: builder.mutation({
            query: (body) => ({ url: "/user", method: "PUT", body }),
        })
    }),
});

export const {
    // User
    useSignInMutation,
    useSignUpMutation,
    useLogOutMutation,
    useGetUserDataMutation
} = api;
export default api;