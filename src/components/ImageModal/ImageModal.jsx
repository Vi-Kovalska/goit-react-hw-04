import React from 'react'
import Modal from 'react-modal';
import s from './ImageModal.module.css'

export const ImageModal = ({ data: { largeImageURL, description }, modalIsOpen, closeModal, handleBackdrop }) => {
    Modal.setAppElement('#root');
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    return (
        <div onClick={(e) => handleBackdrop(e)} className={s.backdrop}>
            <Modal className={s.modal} isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            contentLabel="Gallery's card">
                {/* // contentLabel={data.map(img => img.description)}> */}
                {/* {data.map(img => <img key={crypto.randomUUID()} src={img.urls.regular} alt={img.description} />)} */}
               <img key={crypto.randomUUID()} src={largeImageURL} alt={description} />
            </Modal>
        </div>
    )
}

export default ImageModal