import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from './expenseSlice'


const expenseStore = configureStore({
    reducer : {
        expense : expenseSlice
    }
})

export default expenseStore;