import React from 'react'
import{ WorkTodo} from './WorkTodo'


export const Todos = (props) => {

  let mystyle={
    minheight:"70vh",
    margin:"10px auto"

  }
  return (
    <div className="container " style={mystyle}>
      <h3 className='my-3'>todo list</h3>
      {props.todos.length===0?"no to do to display":
      props.todos.map((todo)=>{
        
        return(
        <>
         <WorkTodo todo={todo} key={todo.sno} ondelete ={props.ondelete}/><hr/>
       </>
        )
      })
    
    }
      
    </div>
  )}

export default Todos
