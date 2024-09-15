import React, { useState, useId } from 'react'

function Accordian({
    key,
    title,
    description,
    ...props
}) {
    const [show, setShow] = useState(false);
    const id = useId();
    return (
        <>
            <div id={id} className='flex justify-center'>
                <div onClick={()=> {
                    setShow(prev => !prev)
                    }}>
                    <h2>{title}</h2>
                </div>
                {
                    show && show ? (
                        <div>
                            <p>{description}</p>
                        </div>
                    ) : null
                }

            </div>
        </>
    )
}

export default Accordian