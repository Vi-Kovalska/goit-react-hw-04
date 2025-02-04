import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'
const ImageGallery = ({array, openModal}) => {
  return (
      <ul>
      {/* {array.map(img => <ImageCard data={img} key={`${img.id}-${img.created_at}`} openModal={openModal} />)} */}
      {array.map(img => <ImageCard data={img} key={`${img.id}-${img.user_id
}`} openModal={openModal} />)}

    </ul>
  )
}

export default ImageGallery