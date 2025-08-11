import cartSlice from "./slices/CartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    name: "store",
    reducer:{
        cartState: cartSlice.reducer
    }
})

export default store
