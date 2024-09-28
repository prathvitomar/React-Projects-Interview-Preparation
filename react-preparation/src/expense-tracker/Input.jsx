import React, { forwardRef } from 'react'

function Input({
  type = "text",
  title = "",
  placeholder = "",
  handleChange,
}, ref) {
  return (
    <>
    <div>
      <h1>{title}</h1>
      <input 
      ref={ref}
      placeholder={placeholder} 
      type={type} 
      onChange={(e) => handleChange(e.target.value)}
      />
    </div>
    </>
  )
}

export default forwardRef(Input)