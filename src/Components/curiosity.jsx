import React, { Component } from 'react';
import Image from './image';
import '../styles.css'

export default class Curiosity extends Component {
    constructor (){
        super()
        this.state = {
            Image: [],
           
        }
    }
    componentDidMount() {
  
        const navurl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw'
        fetch(navurl)
        .then(res => res.json())
        .then(data => this.setState({ navImage: data.photos}))
        const rhazurl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw'
        fetch(rhazurl)
        .then(res => res.json())
        .then(data => this.setState({ rearImage: data.photos}))
        const fhazurl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw'
        fetch(fhazurl)
        .then(res => res.json())
        .then(data => this.setState({ frontImage: data.photos}))
        const masturl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&page=15&api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw'
        fetch(masturl)
        .then(res => res.json())
        .then(data => this.setState({ mastImage: data.photos}))
    }

    render() {
        return(
            <>
            <h1 className='text-3xl'>Mars photo's</h1>
                  <h2>Curiosity photo's</h2>
 
            <h2>Nav Camera</h2>
           {this.state.navImage ?
    <Image image={this.state.navImage} /> :
            <h1>Not Loaded</h1>
            }
      
            <h2>Rear Camera</h2>
           {this.state.rearImage ?
    <Image image={this.state.rearImage} /> :
            <h1>Not Loaded</h1>
            }
            <h2>Front Camera</h2>
           {this.state.frontImage ?
    <Image image={this.state.frontImage} /> :
            <h1>Not Loaded</h1>
            }
            <h2>Mast Camera</h2>
           {this.state.mastImage ?
    <Image image={this.state.mastImage} /> :
            <h1>Not Loaded</h1>
            }
            </>
        )
    }
    
}
