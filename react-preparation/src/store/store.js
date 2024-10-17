import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../shopping-cart-app/cartSlice'
import postSlice from '../redux-tutorial/features/postsSlice'
import { userSlice } from "../redux-tutorial/features/users/usersSlice";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        posts : postSlice,
        users : userSlice
    }
})

export default store;