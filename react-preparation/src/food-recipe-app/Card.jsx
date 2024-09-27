import React from 'react'
import './styles.css'

function Card({post}) {
  return (
    <>
    <div className='card'>
      <img className='post-iamge' src={post.image_url} alt={post.title} />
        <h1>{post.title}</h1>
    </div>
    </>
  )
}

export default Card