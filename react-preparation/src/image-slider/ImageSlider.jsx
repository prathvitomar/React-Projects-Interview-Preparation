import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './style.css';

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (urlVal, pageVal, limitVal) => {
    try {
      const response = await fetch(`${urlVal}?page=${pageVal}&limit=${limitVal}`);
      const result = await response.json();
      if (result) { 
        setImages(result);
        setError("");
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };


  useEffect(() => {
    const debouncing = setTimeout(() => {
      if (url) {
        fetchData(url, page, limit);
      }
    }, 1000); // Debouncing with 1 second delay

    // Cleanup function
    return () => {
      clearTimeout(debouncing);
    };
  }, [url, page, limit]);
  

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  return (
    <>
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
    </>
  )

}

export default ImageSlider