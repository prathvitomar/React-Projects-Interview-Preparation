import React, { useState } from 'react'
import "./tab.css"

function CustomTab({
  title,
  description,
  clickEvent
}) {

  const [show, setShow] = useState(false);

  return (
    <>
    <div className='tab' onClick={()=> setShow(prev => !prev)}>
      <h1>{title}</h1>
      {
        show && show ? (
          <p>{description}</p>
        ) : null
      }
      
    </div>
    </>
  )
}

export default CustomTab