import React, {Component} from 'react';
// import './hubble.css';
// import Navbar from './navbar';
import '../../App.css'

export default class Neptune extends Component {
  constructor() {
    super()
    this.state = {
      data: "",
      live: "",
      neptune: ""
    }
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

const neptuneurl = "https://api.le-systeme-solaire.net/rest/bodies/neptune"
    fetch(proxyurl + neptuneurl)
    .then(res => res.json())
    .then(res => this.setState ({
      neptune: res.moons
    }))
  }

  getNeptuneInfo() {
    return this.state.neptune.map(moon => {
      return <div classname="">
          <a className="text-3xl hover:text-blue-800" href={moon.rel} alt="moon">{moon.moon}</a>
      </div>
    })
  }
  render(){
    return (
      <div className="App">


        <div className = "flex justify-center items-center header-container">
        <h2 className="text-5xl font-extrabold">Neptunes Moons</h2>

        </div>
              {this.state.neptune
                ?     <div className="moon-grid">{this.getNeptuneInfo()}</div>
                : <h1>Loading...</h1>
              }
   

    </div>
    );
  }
  }
