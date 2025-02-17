import React from 'react'
import s from './ImageCard.module.css'
const ImageCard = ({ data: {id, urls : {small, regular}, alt_description} , openModal}) => {
   
  return (
  <>
     <div><img  id={id} src={small} alt={alt_description} width={300} height={200} onClick={()=> openModal(id, regular, alt_description )}/></div>
     
    </>
      )
}

export default ImageCard