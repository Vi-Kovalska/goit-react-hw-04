import React, { useState } from 'react'
import s from './ImageCard.module.css'
// const ImageCard = ({data, openModal}) => {
  const ImageCard = ({data: {id, previewURL}, openModal}) => {
  return (
  <>
    {/* {data.map(img => <div key={`${img.created_at}-${img.id}`}><img  id={img.id} src={img.urls.small} alt={img.description} onClick={()=> openModal()}/></div>) } */}
    <div ><img  id={id} src={previewURL} alt={'Hi'} onClick={()=> openModal()}/></div>
  
    </>
      )
}

export default ImageCard