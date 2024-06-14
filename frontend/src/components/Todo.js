import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo}) => {
    return (
        <div>
            <input>
                type="checkbox"
                checked = {todo.completed}
                onChange = {() => toggleComplete(todo._id)}
            </input>
            <span style={{ textDecoration: todo.completed ? 'Line-through' : ''}} >
                {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>
                Delete
            </button>
        </div>
    );
};














