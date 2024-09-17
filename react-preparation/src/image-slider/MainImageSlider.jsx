import React from 'react'
import ImageSlider from './ImageSlider'

function MainImageSlider() {
  return (
    <>
        <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
        />
    </>
  )
}

export default MainImageSlider