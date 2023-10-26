import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoReducer from "../features/todoSlice";
import authReducer from "../features/authSlice";
import usersReducer from "../features/usersSlice";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer,
        auth: authReducer,
        users: usersReducer,

    },
})