import React from 'react'
import Modal from 'react-modal';
import s from './ImageModal.module.css'

const ImageModal = ({ data, modalIsOpen, closeModal, handleBackdrop }) => {
    Modal.setAppElement(`#${data.map(img => img.id)}`);
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
    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    return (
        <div onClick={(e) => handleBackdrop(e)} className={s.backdrop}>
            <Modal isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            contentLabel='Gallery'>
                {/* // contentLabel={data.map(img => img.description)}> */}
                {/* {data.map(img => <img key={crypto.randomUUID()} src={img.urls.regular} alt={img.description} />)} */}
                 {data.map(img => <img key={crypto.randomUUID()} src={img.largeImageURL} alt={img.description} />)}
            </Modal>
        </div>
    )
}

export default ImageModal