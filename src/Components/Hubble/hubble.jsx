import React, {Component} from 'react';
import './hubble.css';
// import Navbar from './navbar';

export default class Hubble extends Component {
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
const newsurl = "https://hubblesite.org/api/v3/news"
    fetch(proxyurl + newsurl)
    .then(res => res.json())
    .then(res => this.setState ({
      data: res
    }))
const liveurl = "http://hubblesite.org/api/v3/external_feed/st_live"
    fetch(proxyurl + liveurl)
    .then(res => res.json())
    .then(res => this.setState ({
      live: res
    }))
const neptuneurl = "https://api.le-systeme-solaire.net/rest/bodies/neptune"
    fetch(proxyurl + neptuneurl)
    .then(res => res.json())
    .then(res => this.setState ({
      neptune: res.moons
    }))
  }
  getNews() {
    return this.state.data.map(item => {

      return <div   className="news-items" ><a href={item.url} alt="news"><h3 className="name">{item.name}</h3></a></div>
    })
  }
  getLiveFeed() {
    return this.state.live.map(pic => {
      return <div classname="">
        <div >
          <p className="">Date: {pic.pub_date.substring(5,10)}</p>
          <p className="">{pic.description}</p>
          <img  className="hubble-image" src={pic.image} alt="live" />
        </div>
      </div>
    })
  }
  getNeptuneInfo() {
    return this.state.neptune.map(moon => {
      return <div classname="images">
          <a href={moon.rel} alt="moon"><h3 className="moon">{moon.moon}</h3></a>
      </div>
    })
  }
  render(){
    return (
      <div className="App">
{/* 
     
        <div className="div-1">
          <h1 className="news-header">Hubble News</h1>
          {this.state.data
            ?     <h4 className="the-news">{this.getNews()}</h4>
            : <h1>Loading...</h1>
          }
         
            
        </div>

        <div className = "div-2">
        <h1 className="news-header">Neptunes Moons</h1>
              {this.state.neptune
                ?     <h4>{this.getNeptuneInfo()}</h4>
                : <h1>Loading...</h1>
              }
   

        </div> */}
         <div className="flex justify-center items-center header-container">
         <h2 className="text-5xl">Hubble Latest Images</h2>
            </div>
       
       
          {this.state.live
            ?     <div className="main-grid">{this.getLiveFeed()}</div>
            : <h1>Loading...</h1>
          }
        </div>
  
    );
  }
  }
