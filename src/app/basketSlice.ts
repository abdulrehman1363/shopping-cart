import { createSlice } from '@reduxjs/toolkit'
import { initialState } from '../Types/productJSON'

export const basketSlice = createSlice({
    name : "basket",
    initialState : initialState,
    reducers : {
        add: (state, {payload}) => {
            return state.map(item => {

            if (item.id !== payload) {
                return item
            }
            else{
                return {
                    ...item,
                    added: true
                }
            }            
        })
      },
      remove : (state,{payload}) => {
          return state.map(item =>{
              if(item.id !== payload){
                  return item
              }
              else{
                  return {
                      ...item,
                      added : false
                  }
              }
          })
      }
    }
    
})

export const {add,remove} = basketSlice.actions

export default basketSlice.reducer
