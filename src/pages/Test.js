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
            {/* The Clock either using class or function */}
            <ClockUsingHooks />
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


/* 
Practicing using classes, rendered in html above.
LifeCycle Methods = mounting and unmounting elements from DOM. Invokes the following four build-in methods
- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()
setState can only be used in classes, not in functions.
https://dev.to/danielleye/react-class-component-vs-function-component-with-hooks-13dg
*/
class ClockUsingClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date() }
    }

    // calls on changeTime()
    componentDidMount(){
        this.time = setInterval(() => {
            this.changeTime()
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.time)
    }

    // updates date state
    changeTime(){
        this.setState({ date: new Date() })
    }

    render(){
        return(
            <div className='clock'>
                <h1>Hello! This is a class component clock.</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


/* 
Redone using functions and hooks instead of classes
rendered in test
*/

 function ClockUsingHooks() {
     const [time, setTime] = useState(new Date())
     
     const changeTime = () => {
         setTime(new Date())
     }

//  useEffect() hook used to replicate lifecycle behaviour
    useEffect(() => {
        const tick = setInterval(() => {
            changeTime()
        }, 1000)
        return () => clearInterval(tick)
    })

    return(
        <div className='clock'>
            <h1>This is a function component clock</h1>
            <h2>It is {time.toLocaleTimeString()}</h2>
        </div>
    )
 }