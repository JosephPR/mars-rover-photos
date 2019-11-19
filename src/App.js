import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Components/nav';
import Home from './Components/home'
import './App.css';
import './styles.css'
import Opportunity from './Components/opportunity';
import Curiosity from './Components/curiosity';
function App() {
  return (
      <Router>
        <Nav />
    <div className="App">
        <Route exact path='/' component={Home}/>
        <Route exact path='/opportunity' component={Opportunity}/>
        <Route exact path='/curiosity' component={Curiosity}/>

    </div>
      </Router>
  );
}

export default App;
