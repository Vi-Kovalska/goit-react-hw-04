import React from 'react'
import Modal from 'react-modal';
import s from './ImageModal.module.css'

export const ImageModal = ({id,  regular , alt_description , modalIsOpen, closeModal, handleBackdrop }) => {
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
                onRequestClose={closeModal}
                style={customStyles}
            contentLabel="Gallery's card">
                <img key={`${id}${crypto.randomUUID()}`} src={regular} alt={alt_description} />
            </Modal>
        </div>
    )
}

export default ImageModal