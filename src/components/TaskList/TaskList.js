import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Task } from '../Task/Task'

export const TaskList = () => {
    const todos=useSelector((state)=>state.todos)
    const [status, setStatus] = useState("all")
  return (
    <div id="container"> <button onClick={()=>setStatus("all")}>all</button>
    <button onClick={()=>setStatus("completed")}>completed</button>
    <button onClick={()=>setStatus("incompleted")}>incompleted</button>
    <ul>{status=="all"?todos.map(el=><Task key={el.id} el={el}/>):status=="completed"?todos.filter(el=>el.isDone).map(el=><Task key={el.id} el={el}/>):todos.filter(el=>!el.isDone).map(el=><Task key={el.id} el={el}/>)}</ul></div>
  )
}