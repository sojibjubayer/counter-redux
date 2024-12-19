import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:1,
        value:0
    },
    {
        id:2,
        value:0
    }
]

const countersSlice=createSlice({
    name:'counters',
    initialState,
    reducers:{
        increment:(state,action)=>{

           
        const counter=state.find(c=>c.id===action.payload)
        if(counter){
            counter.value++
        }
   
        },
        decrement:(state,action)=>{
            const counter=state.find(c=>c.id===action.payload)
        if(counter){
            counter.value--
        }
   
        },
    }

});
export default countersSlice.reducer;
export const {increment,decrement} = countersSlice.actions;