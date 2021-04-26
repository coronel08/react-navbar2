import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'bulma'

function Search() {
    const [search, setSearch] = useState('')
    const [list, setList] = useState([
        "Go to the store",
        "Wash the dishes",
        "Learn some code"
    ]);

    const addItem = (e) => {
        e.preventDefault()
        const item = e.target.newItem.value
        if (item) setList([...list, item])
        e.target.reset()
    }

    const handleDelete = (item) => {
        setList(list.filter(li => li !== item))
    }

    return (
        <div className='content'>
            <h1>Search This</h1>
            <div className='container'>
                <section className='section'>
                    {/* Search function, updates search state on change */}
                    <input
                        type="text"
                        className="input"
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search"
                    />
                    {/* Filter list by search state and Map Todo items  */}
                    <ul>
                        {list.filter(li => li.toLowerCase().includes(search.toLowerCase())).map((item,key) => (
                            <li key={key}>
                                {item} <span className='delete' onClick={() => handleDelete(item)} />
                            </li>
                        ))}
                    </ul>
                </section>
                <hr />
                {/* Add Item to list */}
                <section className='section'>
                    <form className='form' onSubmit={e => addItem(e)}>
                        <label htmlFor='newItem'> Task: </label>
                        <input 
                            type='text'
                            className='newItem'
                            id='newItem'
                            placeholder='Add something to list'
                        />
                        <button className='btn btn-warning btn-lg'>
                            Add Item
                        </button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Search
