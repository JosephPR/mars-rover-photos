import React, { Component } from 'react';
import Image from './image';
import '../../styles.css'
import '../../App.css'

export default class Curiosity extends Component {
    constructor (){
        super()
        this.state = {
            Image: [],
           
        }
    }
    componentDidMount() {
  
        const navurl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor((Math.random() * 1000) + 1)}&camera=navcam&api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw`
        fetch(navurl)
        .then(res => res.json())
        .then(data => this.setState({ navImage: data.photos}))
        const rhazurl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor((Math.random() * 1000) + 1)}&camera=rhaz&api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw`
        fetch(rhazurl)
        .then(res => res.json())
        .then(data => this.setState({ rearImage: data.photos}))
        const fhazurl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor((Math.random() * 1000) + 1)}&camera=fhaz&api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw`
        fetch(fhazurl)
        .then(res => res.json())
        .then(data => this.setState({ frontImage: data.photos}))
        const masturl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor((Math.random() * 1000) + 1)}&camera=mast&page=15&api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw`
        fetch(masturl)
        .then(res => res.json())
        .then(data => this.setState({ mastImage: data.photos}))
    }

    render() {
        return(
            <> 
            <div className="flex justify-center items-center header-container">
            <h1 className='text-5xl'>Curiosity photo's</h1> 
            </div>
            
            <h2 className='text-5xl'>Nav Camera</h2>
           {this.state.navImage ?
    <Image image={this.state.navImage} /> :
            <h1>Not Loaded</h1>
            }
      
            <h2 className='text-5xl'>Rear Camera</h2>
           {this.state.rearImage ?
    <Image image={this.state.rearImage} /> :
            <h1>Not Loaded</h1>
            }
            <h2 className='text-5xl'>Front Camera</h2>
           {this.state.frontImage ?
    <Image image={this.state.frontImage} /> :
            <h1>Not Loaded</h1>
            }
            <h2 className='text-5xl'>Mast Camera</h2>
           {this.state.mastImage ?
    <Image image={this.state.mastImage} /> :
            <h1>Not Loaded</h1>
            }
            </>
        )
    }
    
}
