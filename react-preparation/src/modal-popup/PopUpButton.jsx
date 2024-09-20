import React from 'react'
import './modal.css'

function PopUpButton({
  title = "",
  type = 'button',
  className = "",
  clickEvent = ()=> {},
  ...props
}) {
  return (
    <>
      <button type={type} className={`button ${className}`} {...props} onClick={(e)=> clickEvent(e)}>{title}</button>
    </>
  )
}

export default PopUpButton