import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducer"
import todoReducer from "./todoReducer"


const store = configureStore({
    reducer:{
        todo:todoSlice,
        data:todoReducer,
    }
})

export default  store;