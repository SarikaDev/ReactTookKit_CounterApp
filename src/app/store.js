import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../Features/Posts/PostSlice';
import userReducer from '../Features/Users/UserSlice'
export const store=configureStore({
    reducer:{
        posts:postReducer,
        users:userReducer,
    }
});