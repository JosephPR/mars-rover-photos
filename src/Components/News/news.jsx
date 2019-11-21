import React, { Component } from 'react';
import NewsContainer from './newsContainer'

export default class News extends Component {
    constructor (){
        super()
        this.state = {
            news: [],
           
        }
    }
    componentDidMount() {
        const newsurl = 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=7eb42fa6c4734435a27b9e06e633dfba'
        fetch(newsurl)
        .then(res => res.json())
        .then(data => this.setState({
            news: data.articles
        }))

    }

    render() {
        return(
            <>
            <div className='text-3xl flex justify-around pb-3'>
                   <h2>Science News</h2>
                   <h2>Description</h2>
                
            </div>
           {this.state.news ?
    <NewsContainer article={this.state.news} /> :
            <h1>Not Loaded</h1>
            }
     
            </>
        )
    }
    
}
