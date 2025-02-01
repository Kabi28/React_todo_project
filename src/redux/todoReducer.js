import { createSlice } from "@reduxjs/toolkit";


const todoReducer = createSlice({
    name:'data',
    initialState:{
        tododata:[]
    },
    reducers:{
        addtodo:(state,action)=>{
            state.tododata.unshift(action.payload)
        },
        deletetodo:(state,action)=>{
            let val = state.tododata.filter(item=>item.name !== action.payload.name)
            state.tododata = val;

        },
        toggletodo:(state,action)=>{
            state.tododata.map(item=>{
                if(item.name === action.payload.name){
                    item.is_completed = !item.is_completed
                }
            })

        }
    }

    
})


export const {addtodo,deletetodo,toggletodo}= todoReducer.actions;
export default todoReducer.reducer;
