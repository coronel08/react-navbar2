import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Item from './pages/Item'
import About from './pages/About'
import Items from './pages/Items'


function App() {
  return (
  <>
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/item' component={Item}/>
      <Route path='/about' component={About}/>
      <Route path='/items' component={Items}/>
    </Switch>
  </Router>
  </>
  );
}

export default App;
