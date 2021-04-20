import React from 'react';
import ImageCard from './imagecard'
import './mystyle.css'
 const ImageList =(props)=>
 {
    const images= props.image.map((image)=>{

         return (
         
         
         <div key={image.id}>
             <img alt={image.description} src={image.urls.regular}/>
        </div>);
  
     })
    return <div className="img-list">{images}</div>
 };
 export default ImageList;