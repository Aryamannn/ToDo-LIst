/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/todos')
        .then((response) => {
          setTodos(response.data);
        })
        .catch((error) => {
          console.error('Error fetching todos:', error);
        });
  }, []);

  const addTodo = (newTodo) => {
    axios.post('http://localhost/5001/todos', newTodo)
        .them((response) => {
          setTodos(response.data);
        })
        .catch((error) => {
          console.error('Error adding todo:', error);
        });
  };

  const toggleComplete = (id) => {
    const todo = todos.find((todo) => todo._id === id);
    axios.put('http://localhost:5001/todos/${id}', {
        ...todo,
        completed: !todo.completed
    }).then((response) => {
      setTodos(todos.map((todo) =>
          todo._id === id ? response.data : todo
      ));
    }).catch((error) => {
        console.error('Error updating todo:', error);
    });
  };
  
  const deleteTodo = (id) => {
    axios.delete('http://localhost:5001/todos/${id}')
        .then(() => {
            setTodos(todos.filter((todo) => todo._id !== id));
        })
        .catch((error) => {
          console.error('Error deleting todo:', error)
        });
  };

  return (
    <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
