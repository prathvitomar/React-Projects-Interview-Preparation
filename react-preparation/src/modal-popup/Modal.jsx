import React from 'react'
import './modal.css'

function Modal({
  title,
  description
}) {
  return (
    <>
    <div className='modal-main'>
        <div className='modal-title'>
            <h1>{title}</h1>
        </div>
        <div className='modal-section'>
            <p>{description}</p>
        </div>
    </div>
    </>
  )
}

export default Modal