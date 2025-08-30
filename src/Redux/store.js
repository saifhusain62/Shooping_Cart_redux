import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../Redux/features/products/productsSlice.js"

const store = configureStore({
    reducer:{
        products:productReducer,
    }
})

export default store;