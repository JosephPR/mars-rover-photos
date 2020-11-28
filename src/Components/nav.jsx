import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'

export default class Nav extends Component {
    constructor (){
        super()
        this.state = {

        }
    }
    componentDidMount() {
        
    }

    render() {
        return(
            <nav className="flex items-center justify-between flex-wrap bg-blue-700  p-6 opacity-75">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <img src="nasa.png" className="fill-current h-10 w-10 mr-2" alt="nasa"/>
              <Link to="/"><span className="font-semibold text-xl tracking-tight text-orange-300">Science Center</span></Link>
            </div>
    
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow ">
                <Link to="/opportunity" className="block mt-4 lg:inline-block text-lg lg:mt-0 text-orange-200 hover:text-white mr-4">
                  Opportunity
                </Link>
                <Link to="/curiosity" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-orange-200 hover:text-white mr-4">
                  Curiosity
                </Link>
                {/* <Link to="/news" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-orange-200 hover:text-white mr-4">
                  News
                </Link>
                <Link to="/archive" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-orange-200 hover:text-white mr-4">
                  Archive
                </Link> */}
                <Link to="/hubble" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-orange-200 hover:text-white mr-4">
                  Hubble
                </Link>
              
    
              </div>
            </div>
          </nav>
        )
    }
    
}
