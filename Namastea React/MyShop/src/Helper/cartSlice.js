import { createSlice } from "@reduxjs/toolkit"


const initialState={
    items:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            console.log(action.payload)
        },
        clearItem:(state,action)=>{
            state.items=[]
        }
    }
})
export const {addItem,removeItem,clearItem}=cartSlice.actions;
export default cartSlice.reducer;