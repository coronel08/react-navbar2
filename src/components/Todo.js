import React from 'react'

function Todo({todo, index, onComplete}) {
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
                <button onClick={()=>onComplete(index)} className='btn btn-success'>
                    Mark Complete
                </button>
            </div>

        </div>
        </React.Fragment>
    );
}

export default Todo
