import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../shopping-cart-app/cartSlice'
import postSlice from '../redux-tutorial/features/postsSlice'
import usersSlice  from "../redux-tutorial/features/users/usersSlice";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        posts : postSlice,
        users : usersSlice
    }
})

export default store;