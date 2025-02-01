import { useEffect, useState } from 'react';
import '../css/Signup.css'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import { createLoginAsync, resetState } from '../redux/reducer';
import { useDispatch,useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';





function Login() {
    const navigate = useNavigate();
    const {access_token,loginError,loginLoading,loginStatus} = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    

    const onSubmit = (data)=>{
        dispatch(createLoginAsync(data))
        
    }
    
    useEffect(()=>{
        if(loginStatus === 'success'){
            navigate('/home')
            alert("logined Successfully")
            dispatch(resetState())
        }
    },[loginStatus])

    useEffect(()=>{
        if(loginStatus !== 'success'){
            navigate('/login')
            
        }
    },[])


    return (
        <div className="container">
            <h2>Login User</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-field">
                    <label htmlFor="email">UserName*</label>
                    <input type="email" name="email" {...register('email',{required:'Enter Proper Email id'})}/>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password*</label>
                    <input type="text" name="password" {...register('password',{required:'please Enter Password',
                        minLength:{
                            value:4,
                            message:'password must be contain 4 characters'
                        }
                    })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <div className="form-field">
                    
                    <button type="submit">Login</button>
                </div>
                <div className="form-field">
                    <Link to={'/signup'}>I Don't have an Account</Link>
                </div>





            </form>
        </div>


    )

}

export default Login;