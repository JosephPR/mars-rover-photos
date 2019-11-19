import React, { Component } from 'react';
import Opportunity from './opportunity';
import Image from './image';


export default class Home extends Component {
    constructor (){
        super()
        this.state = {
            Image: [],
           
        }
    }
    componentDidMount() {
        const pod = 'https://api.nasa.gov/planetary/apod?api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw'
        fetch(pod)
        .then(res => res.json())
        .then(data => this.setState({ pod: data}))
        const latest = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?&api_key=eR2LxJaAolssPdDo4cp9NW31er6cNFa8vkcNvcjw'
        fetch(latest)
        .then(res => res.json())
        .then(data => this.setState({ latestImage: data.latest_photos}))
    }

    render() {
        return(
            <>
           {this.state.pod ?
    <div  className='exp'>
        <h4>{this.state.pod.explanation}</h4>
        <a className='text-blue-500 hover:text-blue-900 underline' href={this.state.pod.url}>Photo of the day</a>
    </div> :
            <h1>Not Loaded</h1>
            }
            <h1 className='text-3xl'>Mars photo's</h1>
                  <h2>Latests photo's</h2>
           {this.state.latestImage ?
    <Image image={this.state.latestImage} /> :
            <h1>Not Loaded</h1>
            }
        
            </>
        )
    }
    
}
