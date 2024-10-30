import React, { useEffect, useState } from 'react'
import '../Components/TodoComponent/TodoComponent.css'

const SearchComponent = ({ todos, setTodos, editIndex , setEditIndex}) => {
    const [todo, setTodo] = useState('');

    useEffect(() => {
        if (editIndex !== null) {
            setTodo(todos[editIndex])
        }
    }, [editIndex])

    function handleAddClick() {
        const trimmedTodo = todo.trim();
        if (trimmedTodo) {
            setTodos([...todos, trimmedTodo]);
            setTodo('');
        }
    }
    function handleEditClick() {
        const updatedItems = todos.map((item, index) =>
            index === editIndex ? todo : item
        );
        setTodos(updatedItems);
        setTodo('');
        setEditIndex(null);

    }
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            if (editIndex !== null) {
                handleEditClick();
            } else {
                handleAddClick();
            }
        }
    }

    return (
        <div>
            <input
                placeholder={editIndex !== null ? "" : 'Enter todo'}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            {

                editIndex !== null ? <button onClick={handleEditClick} className='AddButton'><i className="fas fa-check"></i></button> : <button onClick={handleAddClick} className='AddButton'><i className="fas fa-plus"></i></button>
            }
        </div>
    )
}

export default SearchComponent