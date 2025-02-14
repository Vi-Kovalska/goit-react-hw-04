import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'
const ImageGallery = ({array}) => {
  return (
      <ul className={s.imagesList}>
      {array.map(img => <ImageCard data={img} key={`${img.id}-${img.created_at}`} />)}
    </ul>
  )
}

export default ImageGallery