import { ADD_TASK, DELETE_TASK, EDIT_TASK, STATUS_TASK } from "../const/const";

const initialState={todos:[{id:1,description:"drink coffe",isDone:false},{id:2,description:" task 2",isDone:true}]}

export const todoReducer=(state=initialState,action)=>{
switch (action.type) {
    case ADD_TASK:
        return{...state,todos:[...state.todos,{...action.payload,id:state.todos.length+1}]}
      case DELETE_TASK:
        return{...state,todos:state.todos.filter(el=>el.id!==action.payload)}  
case STATUS_TASK:
    return{...state,todos:state.todos.map(el=>el.id==action.payload?{...el,isDone:!el.isDone}:el)}
    case EDIT_TASK:
      return{...state,todos:state.todos.map(el=>el.id==action.payload.id?{...el,description:action.payload.newDesc}:el)}
    default:
        return state
        
}
}