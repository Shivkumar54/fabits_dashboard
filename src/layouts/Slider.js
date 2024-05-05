import React, { useState } from "react"

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsToShow = 4 // Number of cards to show at a time

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - cardsToShow ? 0 : prevIndex + 1
    )
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - cardsToShow : prevIndex - 1
    )
  }

  return (
    <div className="slider-container">
      <button onClick={goToPrevSlide}>Prev</button>
      <div className="cards-wrapper">
        {images
          .slice(currentIndex, currentIndex + cardsToShow)
          .map((image, index) => (
            <div key={index} className="card">
              <img src={image} alt={`slide-${index}`} className="slide-image" />
            </div>
          ))}
      </div>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  )
}

export default Slider
