import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'
const ImageGallery = ({images, openModal}) => {
  return (
      <ul className={s.imagesList}>
      {images.map((img) => <li key={`${img.id}-${img.created_at}`}> <ImageCard data={img} openModal={openModal}/> </li>)}
    </ul>
  )
}

export default ImageGallery