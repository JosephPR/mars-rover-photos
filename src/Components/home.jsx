import React, { Component } from 'react';
import Image from './Rovers/image';


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
             <div className="flex justify-center items-center header-container">
                <h1 className='text-5xl'>Recent Mars Photo's</h1>
            </div>
        
            <h1 className='text-3xl'>Mars Latest photo's</h1>
           {this.state.latestImage ?
    <Image image={this.state.latestImage} /> :
            <h1>Not Loaded</h1>
            }
        
            </>
        )
    }
    
}

// {this.state.pod ?
//     <div  className='exp'>
//         <img src={this.state.pod.url} alt="of the day"/>
//         {/* <a className='text-2xl text-yellow-800 hover:text-yellow-700 underline' href={this.state.pod.url}>Photo of the day</a> */}
//         <h4 className='text-xl py-5'>{this.state.pod.explanation}</h4>
//     </div> :
//             <h1>Not Loaded</h1>
//             }