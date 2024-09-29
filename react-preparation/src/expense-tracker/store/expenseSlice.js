import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const expenseSlice = createSlice({
    name : 'expenses',
    initialState,
    reducers : {
        addTransaction : (state,action) =>{
            state = action.payload
        }
    }
})

export const {addTransaction} = expenseSlice.actions;

export default expenseSlice.reducer;