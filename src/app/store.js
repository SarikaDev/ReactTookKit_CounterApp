import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../Features/Posts/PostSlice';
import userReducer from '../Features/Users/UserSlice';
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";

const reducers = combineReducers({
    posts: postReducer,
    users: userReducer,
});
const persistConfig = {
    key: 'Posts',
    storage
};
const persistedReducer = persistReducer(persistConfig,reducers);

export  const  store = configureStore({
        reducer:persistedReducer,
        middleware:[thunk]
    
});

export const persistor=persistStore(store);