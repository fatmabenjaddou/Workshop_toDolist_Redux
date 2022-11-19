import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../js/actions/actionTodo'

export const Add = () => {
    const dispatch=useDispatch()
const [desc, setDesc] = useState("")
  return (
    <><h1>To-Do List <i onClick={()=>dispatch(addTask({description:desc,isDone:false}))} class="fa fa-plus"></i></h1>
    <input onChange={(e)=>setDesc(e.target.value)} type="text" placeholder="Add New Todo"/></>
  )
}