import React from 'react'

export const WorkTodo =({todo,ondelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-success" onClick={()=>{ondelete(todo)}}>delete</button>
      
    </div>
  )
}

export default WorkTodo
