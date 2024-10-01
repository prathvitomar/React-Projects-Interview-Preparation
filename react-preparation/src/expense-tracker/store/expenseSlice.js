import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expense : [],
    income : [],
}

export const expenseSlice = createSlice({
    name : 'expenses',
    initialState,
    reducers : {
        addTransaction : (state,action) =>{
            if(action.payload.type === 'expense'){
                state.expense.push(action.payload)
            }
            if(action.payload.type === 'income'){
                state.income.push(action.payload)
            }
        }
    }
})

export const {addTransaction} = expenseSlice.actions;

export default expenseSlice.reducer;