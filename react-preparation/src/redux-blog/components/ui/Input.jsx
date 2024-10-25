import React from 'react'
import "../../styles.css"

function Input({
    name = '',
    value = '',
    onChange,
    type = 'text',
    className = '',
    ...props
}) {
  return (
    <>
        <div className={`${className} input-class`}>
            <input 
            type={type}
            name = {name}
            value={value}
            onChange={onChange}
            {...props}
            />
        </div>
    </>
  )
}

export default Input