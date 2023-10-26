import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value :0
};

export const counterSlice = createSlice({
    name:'counter',
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
export const {incrim,decrim}=counterSlice.actions
export default counterSlice.reducer