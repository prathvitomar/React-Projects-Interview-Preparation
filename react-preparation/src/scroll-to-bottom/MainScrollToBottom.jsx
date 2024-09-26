import React from 'react'
import data from './data'

function MainScrollToBottom() {
    const userData = data;

    function scrollToBottom(){
        window.scrollTo(0, document.body.scrollHeight);
    }

    function scrollToTop(){
        window.scrollTo(document.body.scrollHeight,0);
    }

  return (
    <>
    <button onClick={scrollToBottom}>Scroll to bottom</button>
    {
        userData.map((item)=>(
            <div>
                <h1>{item.title}</h1>
                <section>{item.body}</section>
            </div>
        ))
    }
    <button onClick={scrollToTop}>Scroll to Top</button>
    </>
  )
}

export default MainScrollToBottom