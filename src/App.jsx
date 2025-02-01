import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';




function App() {

    
    const dispatch = useDispatch();

    
    
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Signup />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Error />} />
            </Routes>

        </BrowserRouter>


    )
}

export default App
