import React from 'react';
import { WorkTodo } from './WorkTodo';

export const Todos = (props) => {
  let mystyle = {
    minHeight: "70vh",
    margin: "10px auto"
  };

  return (
    <div className="container" style={mystyle}>
      <h3 className="my-3">Todo List</h3>
      {props.todos.length === 0 ? (
        "No todos to display"
      ) : (
        props.todos.map((todo) => (
          <React.Fragment key={todo.sno}>
            <WorkTodo todo={todo} ondelete={props.ondelete} />
            <hr />
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Todos;
