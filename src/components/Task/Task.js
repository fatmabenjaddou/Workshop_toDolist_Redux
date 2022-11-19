import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask, statusTask } from '../../js/actions/actionTodo'

export const Task = ({el}) => {
  const dispatch=useDispatch()
  return (
    <>
        <li  className={el.isDone?'completed':''}><span className='sp' onClick={()=>dispatch(deleteTask(el.id))}><i  className="fa fa-trash"></i></span><span onClick={()=>dispatch(statusTask(el.id))}>{el.description}</span> <Link to={`/edit/${el.id}`}> <i class="fa-solid fa-pen-to-square"></i></Link></li>
    </>
  )
}