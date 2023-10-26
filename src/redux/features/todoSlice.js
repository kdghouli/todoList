import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value :0
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers :{
        incrim:(state,action)=>{
            state.value += action.payload
        },
        decrim:(state,action)=>{
            state.value -= action.payload
        }

    },

})
export const {incrim,decrim}=todoSlice.actions
export default todoSlice.reducer