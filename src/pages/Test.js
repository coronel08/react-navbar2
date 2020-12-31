import React, {useState, useEffect} from 'react'
// useState explaned in https://www.youtube.com/watch?v=O6P86uwfdR0

// Function that gets passed into useState 1st and 2nd way
function testData(){
    console.log('run function')
    return 1
};

function Test() {
    // 1st way to pass state, called every render/change
    // const [count, setCount] = useState(testData())
    // 2nd way to pass state, only gets called on first render
    // const [count, setCount] = useState(() => testData())
    // passing objects into state, can also seperate count and theme to be seperate states. 
    const [state, setState] = useState({count:2, theme:'blue'})
    const num = state.count
    const theme = state.theme


    // right way to update value based on prev value
    // function decreaseCount() {
    //     return setCount(prevCount => prevCount.count - 1)
    // };
    function decreaseCount(){
        setState(prevState => {
            return {
                ...prevState, 
                count: prevState.count - 1}
        })
    }

    // wrong way to update value, used Const shorthand ---------------------
    // const increaseCount = () => setState(state.count +1)
    // longhanded version of const with wrong update ---------------------------
    // const increaseCount = () =>{
    //     return setCount(count +1)
    // };
    function increaseCount(){
        setState(prevState => {
            return {
                ...prevState, 
                count: prevState.count +1, 
                theme:'Red'}
        })
    }

    

    // State & useEffect for rendering posts/users, uses promises
    const [resourceType, setResourceType] = useState('posts')
    // Create an empty array for fetching json data, gets mapped in html
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    },[resourceType])

    return (
        <React.Fragment>
        <div className='count'>
            <button className='btn-lg' onClick={decreaseCount}>-</button>
            <h2>{state.count}<span>{state.theme}</span></h2>
            <button className='btn-lg' onClick={increaseCount}>+</button>
            <div className='posts'>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <h1>{resourceType}</h1>
                {/* mapping json */}
                <span>
                    {items.map(item => {
                    return <pre>{JSON.stringify(item)}</pre>
                    })}
                </span>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Test
