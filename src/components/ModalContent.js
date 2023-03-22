import React from 'react';

const ModalContent = ({close, data}) => {
  return (
    <>
        <div className="modal">
            <div className="modal-content">
                <h3 className='modal-title'>{data.name}</h3>
                <button className='close-modal' onClick={close}><i className="fa-solid fa-x fa-lg"></i></button>
            </div>
            <p className='modal-description'>{data.description}</p>
        </div>
    </>
  )
}

export default ModalContent