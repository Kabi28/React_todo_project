import { useSelector,useDispatch } from "react-redux"
import RenderTodo from "./RenderTodo"
import { useForm } from "react-hook-form"
import '../css/Todo.css'
import { useState } from "react"
import Pagination from './Pagination'
import { addtodo } from "../redux/todoReducer"




const Todo = ()=>{

    const [currPage,setCurrPage] = useState(1)
    const [perPage,setPerPage] = useState(5)

    

    const {tododata} = useSelector(state=>state.data)
    const dispatch = useDispatch();

    const {register, handleSubmit , formState:{errors},reset} = useForm();
    const date = new Date()
    const clickSubmit = (data)=>{
        dispatch(addtodo({id:Date.now(),name:data.title,email:data.description,createdAt:date.getDay(),is_completed:false}))
        reset()

    }
    const last = currPage * perPage
    const first =last - perPage; 

    const currdata = tododata.slice(first,last)

    return(
        <div className='container-div'>
            <div className="todo-container">
            <form onSubmit={handleSubmit(clickSubmit)} className="todo-input" >
                <input type="text" placeholder="Enter Todo Title" {...register('title',{required:'Please Enter the Title'})}/>
                {errors.title && <p className="error">{errors.title.message}</p>}
                <input type="text" placeholder="Enter Todo Description" {...register('description',{required:'Please Enter the Description'})}/>
                {errors.description && <p className="error">{errors.description.message}</p>}
                <button className="todoBtn" type="submit">Add Todo</button>
            </form>
            
            <div className="todo-output">
                {
                    currdata.map((item,index)=>(
                        <RenderTodo key={index} item={item} />
                    ))
                    
                }
            </div>
            
            
        </div>
        <div className="paginationBtn">
            <Pagination setCurrPage={setCurrPage} tododata={tododata} />
        </div>
      
        
        </div>
      
    )


}

export default Todo
