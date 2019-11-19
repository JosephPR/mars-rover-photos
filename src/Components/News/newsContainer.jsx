import React from 'react'
import '../../App.css'

export default function NewsContainer(props) {
        const articles = props.article.map( article => {
          return  <div className='flex justify-center'>
        <a className='text-red-800 hover:text-red-600' href={article.url}><h1 className='text-2xl'>{article.title}</h1></a>
        <h1 className='text-xl'>{article.description}</h1>
        <img className='max-w-xs flex m-5' alt='img' src={article.urlToImage} />
        <br />
              </div> 
        })
    

        return(
            <>
        <div className=''>{articles}</div><br />
        </>
        )
    
}