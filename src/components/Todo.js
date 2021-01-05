import React from 'react'

function Todo({todo, index, onComplete, onUnfinished, onDeleteTodo}) {
    return (
        <React.Fragment>
        <div key={index} className="card mb-3">
            <div className="card-body">
                <h5 
                className="card-title"
                style={{textDecoration:todo.isCompleted ? "line-through":""}}
                >
                    {todo.text}
                </h5>
                {/* Completed Button */}
                <button onClick={()=>onComplete(index)} className='btn btn-success'>
                    Mark Complete
                </button>
                {/* Incomplete Button */}
                <button onClick={()=>onUnfinished(index)} className='btn btn-warning'>
                    Mark Incomplete
                </button>
                {/* Delete Button */}
                <button onClick={()=>onDeleteTodo(index)} className='btn btn-danger'>
                    Delete
                </button>


            </div>

        </div>
        </React.Fragment>
    );
}

export default Todo
