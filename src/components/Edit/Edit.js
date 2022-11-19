import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editTask } from '../../js/actions/actionTodo'

const Edit = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {id}=useParams()
    const todoEdit=useSelector(state=>state.todos.find(el=>el.id==id))
    const [newDesc, setNewDesc] = useState(todoEdit.description)
    const handelEdit=()=>{
        if(!newDesc){
            alert("description is required")
            return; }
        
        dispatch(editTask(id,newDesc));
        navigate("/")
    }
    
    
  return (
    <div><h1>Edit Task</h1>
        <input onChange={(e)=>setNewDesc(e.target.value)} value={newDesc}/><button onClick={handelEdit}>save</button></div>
  )
}

export default Edit