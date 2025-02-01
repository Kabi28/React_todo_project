import '../css/Todo.css'
import { useDispatch } from "react-redux"
import { deletetodo,toggletodo } from "../redux/todoReducer"



const RenderTodo = ({item})=>{
    const dispatch = useDispatch();

    return(
        <div className="renderContainer">
            <div className='wrapper'>
                <h2>{item.name}  :</h2>
                <h3>{item.email}</h3>
                <h3 className='date'> created at : {item.createdAt}</h3>
            </div>
            <div className="actionBtn">
                <button className='delBtn' onClick={()=>dispatch(deletetodo(item))}>Delete</button>
                <button className='completeBtn' onClick={()=>dispatch(toggletodo(item))}>{item.is_completed ? 'Mark as Complete':'Undo'}</button>
            </div>
        </div>
       
    )

}

export default RenderTodo;