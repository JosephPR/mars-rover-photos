import React, { Component } from 'react';
import Image from './image';


export default class Opportunity extends Component {
    constructor (){
        super()
        this.state = {
            Image: [],
           
        }
    }
    componentDidMount() {
        const pancamurl = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${Math.floor((Math.random() * 1000) + 1)}&api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw`
        fetch(pancamurl)
        .then(res => res.json())
        .then(data => this.setState({ pancamImage: data.photos}))
    }

    render() {
        return(
            <>
            <div className="flex justify-center items-center header-container">
                <h1 className='text-5xl'>Opportunity photo's</h1>
            </div>
                  <h2 className='text-5xl'>Pan Camera</h2>
           {this.state.pancamImage ?
    <Image image={this.state.pancamImage} /> :
            <h1>Not Loaded</h1>
            }
            </>
        )
    }
    
}
