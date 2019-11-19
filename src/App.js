import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Components/nav';
import Home from './Components/home'
import './App.css';
import './styles.css'
import Opportunity from './Components/Rovers/opportunity';
import Curiosity from './Components/Rovers/curiosity';
import News from './Components/News/news';
function App() {
  return (
      <Router>
        <Nav />
    <div className="App">
        <Route exact path='/' component={Home}/>
        <Route exact path='/opportunity' component={Opportunity}/>
        <Route exact path='/curiosity' component={Curiosity}/>
        <Route exact path='/news' component={News}/>

    </div>
      </Router>
  );
}

export default App;
