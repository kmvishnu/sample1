import React from 'react'
import '../Components/TodoComponent/TodoComponent.css'

const TodoListComponent = ({ todos, setTodos, setEditIndex }) => {
    function deleteTodo(index) {
        const temp = todos.filter((val, i) => i !== index);
        setTodos(temp);
    }

    function updateTodo(index) {
        setEditIndex(index);
    }
    return (
        <div id='list'>
            {
                todos.map((val, index) => {
                    return (
                        <div key={index} >
                            <div style={{ display: 'flex', justifyContent:'space-between', width:'400px', alignItems:'center'}}>
                                <div style={{overflow: 'hidden',textOverflow: 'ellipsis', width: '300px',whiteSpace: 'nowrap'}}>
                                {/* <div>&#9733; {val}</div>
                                 */}
                                   <i className="fas fa-star"></i> {val}
                                </div>
                                <div>
                                    <button onClick={() => updateTodo(index)} className='ActionButton'><i className="fas fa-pen"></i></button>
                                    <button onClick={() => deleteTodo(index)} className='ActionButton'><i className="fas fa-trash"></i></button>
                                
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoListComponent