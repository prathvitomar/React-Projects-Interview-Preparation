import React from 'react'

function Button({
    type = 'button',
    buttonName = 'Submit',
    className = '',
    ...props
}) {
  return (
    <>
    <button
    className={` className`}
    type={type}
    {...props}
    >{buttonName}</button>
    </>
  )
}

export default Button