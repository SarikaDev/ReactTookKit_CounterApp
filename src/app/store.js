import { configureStore } from "@reduxjs/toolkit";
import Counterreducer from '../Features/Counter/CounterSlice'
const store=configureStore({
    reducer:{
        counter:Counterreducer,
    }
})

export default store;