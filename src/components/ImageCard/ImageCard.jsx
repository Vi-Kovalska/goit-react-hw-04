import React, { useEffect, useRef, useState } from 'react'
import s from './ImageCard.module.css'
import ImageModal from '../ImageModal/ImageModal';
// const ImageCard = ({data, openModal}) => {
const ImageCard = ({ data: { id, previewURL }, data}) => {
    // Modal region
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
    {/* {data.map(img => <div key={`${img.created_at}-${img.id}`}><img  id={img.id} src={img.urls.small} alt={img.description} onClick={()=> openModal()}/></div>) } */}
      <li className={s.cardItem}><img id={id} width={200} height={200} src={previewURL} alt={'Hi'} onClick={() => {
        openModal();
      }} /></li>
      {modalIsOpen && <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} handleBackdrop={handleBackdrop} data={data}/>}
  
    </>
      )
}

export default ImageCard