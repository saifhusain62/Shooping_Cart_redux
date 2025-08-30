import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const productSlice = createSlice({
    name: "products",
    initialState:initialState,
    reducers:{
        addproduct:(state,action)=>{
            state.push({
               id:state.length>0 ? state[state.length-1].id : 1,
            })
        }
    }
})

export const {addproduct} = productSlice.actions;
export default productSlice.reducer;