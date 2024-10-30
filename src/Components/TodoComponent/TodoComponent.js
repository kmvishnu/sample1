import './TodoComponent.css';
import { useState } from 'react';
import SearchComponent from '../SearchComponent';
import TodoListComponent from '../TodoListComponent';

function TodoComponent() {

  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <SearchComponent todos={todos} setTodos={setTodos} editIndex={editIndex} setEditIndex={setEditIndex}  />
      <div id='content'>

      <TodoListComponent todos={todos} setTodos={setTodos} setEditIndex={setEditIndex} />
      </div>

    </div>
  );
}

export default TodoComponent;
