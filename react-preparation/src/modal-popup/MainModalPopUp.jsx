import React, { useState } from 'react'
import './modal.css'
import Modal from './Modal';
import Button from './PopUpButton';

function MainModalPopUp() {
  const [show, setShow] = useState(false);

  const showEvent = (e) =>{
    setShow(prev => !prev);
  }

  const data = [{
    title : "Modal Title",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maxime reiciendis vel inventore dolore perspiciatis asperiores, at, recusandae, alias enim sequi. Officiis odio quis ipsam sequi alias dolorum velit labore."
  }]
  
  return (
    <>
        <Button
        clickEvent={showEvent}
        title= "Click to Show Modal"
        />
        {
          show && show ? (
              data.map((item, index)=>(
                <div key={index}>
                  <Modal 
                  title={item.title}
                  description={item.description}
                  />
                </div>
              ))
          ) : null
        }
    </>
  )
}

export default MainModalPopUp