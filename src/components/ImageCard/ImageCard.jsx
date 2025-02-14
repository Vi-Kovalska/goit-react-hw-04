import React, { useEffect, useRef, useState } from 'react'
import s from './ImageCard.module.css'
import ImageModal from '../ImageModal/ImageModal';
const ImageCard = ({ data: { created_at, id, urls : {small, regular}, alt_description} }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal =() => {
        setModalIsOpen(true);
  }
  const closeModal =() => {
    setModalIsOpen(false);
  }
  const handleBackdrop = (e) => {
        if (e.target === e.currentTarget) {
          closeModal();
      }   
    }
    
  return (
  <>
     <div key={`${created_at}-${id}`}><img  id={id} src={small} alt={alt_description} width={300} height={200} onClick={()=> openModal()}/></div>
      {modalIsOpen && <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} handleBackdrop={handleBackdrop} regular={regular} id={id} alt_description={alt_description} />}
  
    </>
      )
}

export default ImageCard