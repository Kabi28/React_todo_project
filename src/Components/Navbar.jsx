import { Link } from "react-router-dom";
import "../css/Navbar.css"
import { useDispatch, useSelector } from "react-redux"

function Navbar() {
    const dispatch = useDispatch();
    
    const handleLogout = ()=>{
        localStorage.removeItem('access_token')
    }
    
    return (
        <div className="nav">
            <h1>Todo App</h1>
            <button onClick={handleLogout()}>logout</button>
            
        </div>
    )
    
}

export default Navbar;