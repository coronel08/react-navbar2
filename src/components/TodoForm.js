import React, {useState} from 'react'

function TodoForm({onAddTodo, todo}) {
    const [value, setValue] = useState("");

    return (
        <form  
            onSubmit={(e) => {
                e.preventDefault();
                onAddTodo(value)}
            }
            style={{display: 'flex'}}
        >
            <input 
                type="text"
                className="form-control"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Type then hit Enter"
            />
        </form>
    )
}

export default TodoForm
