import React from 'react';

export const WorkTodo = ({ todo, ondelete }) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => ondelete(todo)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WorkTodo;
