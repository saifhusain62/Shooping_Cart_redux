import { configureStore,  } from '@reduxjs/toolkit'
import productReducer from "../Redux/features/products/productsSlice.js"
import cartReducer from "../Redux/features/products/carts/cartSlice.js"

const store = configureStore({
    reducer:{
        products:productReducer,
        carts:cartReducer,
    }
})

export default store;