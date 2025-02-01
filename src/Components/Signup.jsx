import '../css/Signup.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSignUpAsync } from '../redux/reducer';
import { useNavigate, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { resetState } from '../redux/reducer'


function Signup() {
    const navigate = useNavigate();
    const { createLoading, access_token, registerStatus ,registerError } = useSelector(state => state.todo)
    const dispatch = useDispatch();

    const [token,setToken] = useState(access_token);

    const { register, handleSubmit, formState:{
        errors
    },reset } = useForm();

const onSubmit = (data)=>{
    dispatch(createSignUpAsync(data))
    reset()      
}
    useEffect(()=>{
        if(registerStatus === 'success'){
            alert('Registered Succcessully')
            navigate('/login')
            dispatch(resetState())
        }
    },[registerStatus])    




    return (
        <div className="container">
            <h2>SignUp User</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-field">
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="password" {...register('email',{required:'Enter proper Email'})}/>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password*</label>
                    <input type="text" name="password" {...register('password',{required:'please Enter Password',
                        minLength:{
                            value:4,
                            message:'password must be contain 4 characters'
                        }
                    })}/>
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className="form-field">
                    {createLoading ? <button type="submit" disabled>Loading...</button> :
                        <button type="submit">Register</button>}
                </div>
                <div className="form-field">
                    {registerError && <p>{registerError}</p>}
                </div>
                <div className="form-field">
                    <Link to={'/login'}>I have a Account</Link>
                </div>





            </form>
        </div>


    )

}

export default Signup;