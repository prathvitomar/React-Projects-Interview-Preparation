import React, { forwardRef } from 'react'

function Input({
  type = "text",
  title = "",
  placeholder = "",
  handleChange,
  ...props
}, ref) {
  return (
    <>
    <div>
      <h1>{title}</h1>
      <input 
      ref={ref}
      placeholder={placeholder} 
      type={type} 
      onChange={handleChange}
      {...props}
      />
    </div>
    </>
  )
}

export default forwardRef(Input)