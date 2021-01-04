import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Item from './pages/Item'
import About from './pages/About'
import Items from './pages/Items'
import Test from './pages/Test'
import { Component } from 'react';

class App extends Component {
  state = {
    items:[{id:1, value:0}, {id:2, value:10}, {id:3, value:0}]
  }
  
  handleIncrement = item =>{
    const items = [...this.state.items]
    const index = items.indexOf(item)
    items[index] = {...item}
    items[index].value++
    this.setState({items})
  }

  handleReset = () => {
    const items = this.state.items.map(i =>{
      i.value = 0
      return i
    })
    this.setState({items})
  }

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId)
    this.setState({items:items})
  }

  render(){
    return (
      <>
      <Router>
        <Navbar2
          totalItems = {this.state.items.reduce((prev,cur) =>{
            return prev + cur.value
          }, 0)} 
        />
        <Items 
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement ={this.handleIncrement}
          items={this.state.items}
        />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/item' component={Item}/>
          <Route path='/about' component={About}/>
          <Route path='/items' component={Items}/>
          <Route path='/test' component={Test}/>
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
