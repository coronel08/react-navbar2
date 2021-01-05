import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Item from './pages/Item'
import About from './pages/About'
import Items from './pages/Items'
import Test from './pages/Test'
import React, { Component, useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App(){
  const [todos, setTodos] = useState([
    {text:"Learn React Hooks", isCompleted:true},
    {text:"Take a drive", isCompleted:false},
    {text:"Play some games", isCompleted:false}
  ]);

  // passes todos as rest param,
  const handleAddTodo = text => {
    const newTodos = [...todos,{text}];
    setTodos(newTodos);
    console.log(newTodos)
  }

  // toggles strikethrough text
  const handleComplete = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }

  return(
    <React.Fragment>
      {todos.map((todo, index) => (
        <Todo 
          todo={todo} 
          key={index}
          onComplete={handleComplete}
          index={index}
        />
      ))}
      <TodoForm onAddTodo={handleAddTodo}/>
    </React.Fragment>
  )  
}

// class App extends Component {
//   state = {
//     items:[{id:1, value:0}, {id:2, value:10}, {id:3, value:0}]
//   }
  
//   handleIncrement = item =>{
//     const items = [...this.state.items]
//     const index = items.indexOf(item)
//     items[index] = {...item}
//     items[index].value++
//     this.setState({items})
//   }

//   handleReset = () => {
//     const items = this.state.items.map(i =>{
//       i.value = 0
//       return i
//     })
//     this.setState({items})
//   }

//   handleDelete = itemId => {
//     const items = this.state.items.filter(item => item.id !== itemId)
//     this.setState({items:items})
//   }

//   render(){
//     return (
//       <>
//       <Router>
//         <Navbar2
//           totalItems = {this.state.items.reduce((prev,cur) =>{
//             return prev + cur.value
//           }, 0)} 
//         />
//         <Items 
//           onReset={this.handleReset}
//           onDelete={this.handleDelete}
//           onIncrement ={this.handleIncrement}
//           items={this.state.items}
//         />
//         <Switch>
//           <Route path='/' exact component={Home}/>
//           <Route path='/item' component={Item}/>
//           <Route path='/about' component={About}/>
//           <Route path='/items' component={Items}/>
//           <Route path='/test' component={Test}/>
//         </Switch>
//       </Router>
//       </>
//     );
//   }
// }

export default App;
