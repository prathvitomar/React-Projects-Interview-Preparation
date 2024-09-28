import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const expenseSlice = createSlice({
    name : 'expenses',
    initialState,
    reducers : {
        addTotalExpense : (state,action) =>{
            state.expenses = action.payload
        },
        addTotalIncome : (state,action) =>{
            state.income = action.payload
        }
    }
})

export const {addTotalExpense, addTotalIncome} = expenseSlice.actions;

export default expenseSlice.reducer;