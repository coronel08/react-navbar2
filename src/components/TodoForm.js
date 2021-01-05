import React, {useState} from 'react'

function TodoForm() {
    const [value, setValue] = useState("");

    return (
        <form style={{display: 'flex'}}>
            <input 
                type="text"
                className="form-control"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Type then hit Enter"
            />
            {/* <button className='btn btn-md btn-primary'
            >
                Add
            </button> */}
        </form>
    )
}

export default TodoForm
