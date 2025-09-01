import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        name:"Phone",
        category:"Gadgets",
        image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date:"2021-05-12",
        price:250,
        id:1
    },
     {
        name:"Headphone",
        category:"Gadgets",
        image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date:"2021-05-14",
        price:300,
        id:2
    }
]

const productSlice = createSlice({
    name: "products",
    initialState:initialState,
    reducers:{
        addproduct:(state,action)=>{
            console.log(action.payload)
            state.push({
               id:state.length>0 ? state[state.length-1].id : 1,
               ...action.payload
            })
        }
    }
})

export const {addproduct} = productSlice.actions;
export default productSlice.reducer;