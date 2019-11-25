import React from 'react'
import '../../App.css'

export default function NewsContainer(props) {
        const articles = props.article.map( article => {
          return (
            <>
                  <div className='flex-wrap'>
                      <a className='text-red-900 hover:text-red-600' href={article.url}><h1 className='text-2xl'>{article.title}</h1></a>
                      <h1 className='text-xl'>{article.description}</h1>
                      <img className='max-w-xs flex m-5' alt='img' src={article.urlToImage} />
                  </div> 
              
                  <br />
                  </>
          ) 
        })
    

        return(
            <>
               <div  className='inline-flex justify-center flex-wrap'>{articles}</div><br />
            </>
        )
    
}