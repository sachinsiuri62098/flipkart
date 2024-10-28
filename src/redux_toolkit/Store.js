import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './CartSlice'

const Store = configureStore({
    reducer: {
        items : cartSlice
    }
})

export default Store;