import React from 'react';
import nasa from './nasa.png';
import Home from './Components/home'
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={nasa} className="App-logo" alt="nasa" />
        
        <Home />
    </div>
  );
}

export default App;
