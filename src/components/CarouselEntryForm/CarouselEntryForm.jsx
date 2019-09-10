import React, { useState } from 'react'

import './CarouselEntryForm.css'

export default function CarouselEntryForm({ CarouselItem }) {
  const [carouselItem, setCarouselItem] = useState()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    CarouselItem(carouselItem)
    setCarouselItem('')
  }

  return (
    <form className='CarouselEntryForm' onSubmit={handleOnSubmit}>
      <input
        className='CarouselEntryForm_input'
        placeholder='Please insert a Carousel Item'
        value={carouselItem}
        onChange={(e) => setCarouselItem(e.target.value)}
      />
      <button className='CarouselEntryForm_button' onClick={handleOnSubmit} >Submit</button>
    </form>
  )
}
