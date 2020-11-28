import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Components/nav';
import Home from './Components/home'
import Opportunity from './Components/Rovers/opportunity';
import Curiosity from './Components/Rovers/curiosity';
import Spirit from './Components/Rovers/spirit';
import News from './Components/News/news';
import Archive from './Components/POD/pod';
import Hubble from './Components/Hubble/hubble';
import Neptune from './Components/Planets/neptune';
import './App.css';
import './styles.css'

function App() {
  return (
      <Router>
        <Nav />
    <div className="App">
        <Route exact path='/' component={Home}/>
        <Route exact path='/opportunity' component={Opportunity}/>
        <Route exact path='/curiosity' component={Curiosity}/>
        <Route exact path='/spirit' component={Spirit}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/archive' component={Archive}/>
        <Route exact path='/hubble' component={Hubble}/>
        <Route exact path='/neptune' component={Neptune}/>

    </div>
    <footer className="footer bg-blue-700 h-48 flex  justify-center items-center text-3xl"> JPR</footer>
      </Router>
  );
}

export default App;
