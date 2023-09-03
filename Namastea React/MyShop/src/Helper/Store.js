import cartReducer from "./cartSlice";

const { configureStore } = require("@reduxjs/toolkit");


const Store=configureStore({
    reducer:{
       product:cartReducer,
    }
})

export default Store;