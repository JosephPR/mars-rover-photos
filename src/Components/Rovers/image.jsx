import React from 'react'
import '../../App.css'
export default function Image(props) {
        const image = props.image.map( photo => {
          return  <div>
              <img className='max-w-lg p-5 added-color' alt='img' src={photo.img_src}/> 
              <br />
        <p>{photo.earth_date}</p>
        <h4>{photo.rover.name}</h4>
              </div> 
        })
    

        return(
            <div className='images'>{image}</div>
        )
    
}