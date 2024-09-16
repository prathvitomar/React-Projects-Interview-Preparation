import React from 'react'
import ImageSlider from './ImageSlider'

function MainImageSlider() {
  return (
    <>
        <ImageSlider
        url="https://picsum.photos/v2/list"
        limit={10}
        page={1}
        />
    </>
  )
}

export default MainImageSlider