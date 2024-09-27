import React, { useRef } from 'react'
import data from './data'

function MainScrollToBottom() {
    const ref = useRef(null);
    const userData = data;
    function scrollToBottom(){
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

    function scrollToTop(){
        document.body.scrollIntoView({ behavior: 'smooth' });

    }

  return (
    <>
    <button onClick={scrollToBottom}>Scroll to bottom</button>
    {
        userData.map((item)=>(
            <div key={item.id}>
                <h1>{item.title}</h1>
                <section>{item.body}</section>
            </div>
        ))
    }
    <div ref={ref}></div>
    <button onClick={scrollToTop}>Scroll to Top</button>
    </>
  )
}

export default MainScrollToBottom