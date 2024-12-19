import { configureStore } from "@reduxjs/toolkit";
import counterReducers from '../features/counters/countersSlice'


const store = configureStore({
    reducer:{
        counters:counterReducers
    }
});
export default store;