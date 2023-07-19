import React, { useState } from 'react';
import './style.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditingValue(todos[index]);
  };

  const handleUpdateTodo = () => {
    if (editingValue.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = editingValue;
      setTodos(updatedTodos);
      setEditingIndex(null);
      setEditingValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
      <div className="container">
        <h1>Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a task"
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li className="todo-item" key={index}>
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editingValue}
                  onChange={(event) => setEditingValue(event.target.value)}
                />
              ) : (
                todo
              )}
              <div>
                {editingIndex === index ? (
                  <>
                    <button className="save-btn" onClick={handleUpdateTodo}>
                      Save
                    </button>
                    <button onClick={() => setEditingIndex(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="edit-btn" onClick={() => handleEditTodo(index)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default TodoList;
