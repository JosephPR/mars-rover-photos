import React, { Component } from 'react';
import NewsContainer from './newsContainer'

export default class News extends Component {
    constructor (){
        super()
        this.state = {
            news: [],
           
        }
    }
    async componentDidMount() {
        const newsurl = 'https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=10&apiKey=7eb42fa6c4734435a27b9e06e633dfba'
        await fetch(newsurl)
        .then(res => res.json())
        .then(data => this.setState({
            
            news: data.articles
        }))
       
    }

    render() {
        
        return(
            <>
            <div className='text-3xl flex-col justify-around pb-3'>
                   <h2>Science News</h2>
               
                
            </div>
           {this.state.news === null ?
           
           <h1>Not Loaded</h1>:
    <NewsContainer article={this.state.news} /> 
            }
     
            </>
        )
    }
    
}
