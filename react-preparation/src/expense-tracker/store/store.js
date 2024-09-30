import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from './expenseSlice'


const expenseStore = configureStore({
    reducer : {
        expenses : expenseSlice
    }
})

export default expenseStore;