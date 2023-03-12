import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name:"product",
    initialState:{
        value : 0 ,
    },
    reducers:{
          tang: (state) => {
            state.value += 1
          },
          giam: (state) => {
            state.value -= 1
          },
          reset : (state) =>{
            state.value = 0
          },
          tangTheosoluong: (state, action) => {
            state.value += action.payload
          },
    }
})
export const { tang, giam, reset, tangTheosoluong } = productSlice.actions

export default productSlice.reducer