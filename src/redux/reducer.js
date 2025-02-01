import { createSlice ,createAsyncThunk, current} from "@reduxjs/toolkit";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";



const datas  = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "age": 29,
      "city": "New York"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "age": 35,
      "city": "Los Angeles"
    },
    {
      "id": 3,
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "age": 42,
      "city": "Chicago"
    },
    {
      "id": 4,
      "name": "Diana Ross",
      "email": "diana.ross@example.com",
      "age": 28,
      "city": "Miami"
    },
    {
      "id": 5,
      "name": "Eve Davis",
      "email": "eve.davis@example.com",
      "age": 33,
      "city": "San Francisco"
    },
    {
      "id": 6,
      "name": "Frank Wright",
      "email": "frank.wright@example.com",
      "age": 50,
      "city": "Houston"
    },
    {
      "id": 7,
      "name": "Grace Lee",
      "email": "grace.lee@example.com",
      "age": 26,
      "city": "Seattle"
    },
    {
      "id": 8,
      "name": "Hank Miller",
      "email": "hank.miller@example.com",
      "age": 31,
      "city": "Denver"
    },
    {
      "id": 9,
      "name": "Ivy King",
      "email": "ivy.king@example.com",
      "age": 38,
      "city": "Austin"
    },
    {
      "id": 10,
      "name": "Jack White",
      "email": "jack.white@example.com",
      "age": 46,
      "city": "Boston"
    },
    {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "age": 29,
        "city": "New York"
      },
      {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob.smith@example.com",
        "age": 35,
        "city": "Los Angeles"
      },
      {
        "id": 3,
        "name": "Charlie Brown",
        "email": "charlie.brown@example.com",
        "age": 42,
        "city": "Chicago"
      },
      {
        "id": 4,
        "name": "Diana Ross",
        "email": "diana.ross@example.com",
        "age": 28,
        "city": "Miami"
      },
      {
        "id": 5,
        "name": "Eve Davis",
        "email": "eve.davis@example.com",
        "age": 33,
        "city": "San Francisco"
      },
      {
        "id": 6,
        "name": "Frank Wright",
        "email": "frank.wright@example.com",
        "age": 50,
        "city": "Houston"
      },
      {
        "id": 7,
        "name": "Grace Lee",
        "email": "grace.lee@example.com",
        "age": 26,
        "city": "Seattle"
      },
      {
        "id": 8,
        "name": "Hank Miller",
        "email": "hank.miller@example.com",
        "age": 31,
        "city": "Denver"
      },
      {
        "id": 9,
        "name": "Ivy King",
        "email": "ivy.king@example.com",
        "age": 38,
        "city": "Austin"
      },
      {
        "id": 10,
        "name": "Jack White",
        "email": "jack.white@example.com",
        "age": 46,
        "city": "Boston"
      }
  ]
  


export const createSignUpAsync = createAsyncThunk('todo/createuser',async(data,{rejectWithValue,dispatch})=>{
    
    try{
        const response = await fetch('https://todo-learnz-development-hubs-projects.vercel.app/register',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email:data.email,password:data.password})
        })
        
        if(!response.ok){
            throw new Error('Registration failed')
        }

        
        return await response.json()
    }catch(error){
        return rejectWithValue(error.message)
    }
})



export const createLoginAsync = createAsyncThunk('todo/loginuser',async(data,{rejectWithValue})=>{
  
    try{
        const response = await fetch('https://todo-learnz-development-hubs-projects.vercel.app/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username:data.email,password:data.password})
        })
    
        if(!response.ok){
            throw new Error("Login Unsuccessfull")
        }
        return await response.json();
    }catch(err){
        return rejectWithValue(err.message)
    }
})

// const token = JSON.parse(localStorage.getItem('access_token')) || [];


const todoSlice = createSlice({
    name : 'todo',
    initialState:{
        createLoading:false,
        registerStatus:'idle',
        registerError:null,
        loginLoading:false,
        loginStatus:'idle',
        loginError:null
    },
    reducers:{
        resetState:(state)=>{
            state.createLoading = false,
            state.registerStatus = 'idle',
            state.registerError = null,
            state.loginStatus = 'idle'

        }
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createSignUpAsync.pending,(state)=>{
            state.createLoading = true;
            state.registerStatus = 'pending';
            
        })
        .addCase(createSignUpAsync.fulfilled,(state,action)=>{
            state.createLoading = false;
            state.registerStatus = 'success';
            
        })
        .addCase(createSignUpAsync.rejected,(state,action)=>{
            state.createLoading = false;
            state.registerStatus = 'failed';
            state.registerError = action.payload;
            
        })
        .addCase(createLoginAsync.pending,(state)=>{
            state.loginLoading = true;
            state.loginStatus = 'pending',
            state.loginError = null
        })
        .addCase(createLoginAsync.fulfilled,(state,action)=>{
            state.loginLoading = false;
            state.loginStatus = 'success',
            state.loginError = null,
            state.loginStatus = 'success'
            localStorage.setItem('access_token',action.payload.access_token)
            
        })
        .addCase(createLoginAsync.rejected,(state,action)=>{
            state.loginLoading = false;
            state.loginStatus = 'failed',
            state.loginError = action.payload
        })
    }
})

export const {resetState}= todoSlice.actions;
export default todoSlice.reducer;