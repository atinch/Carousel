import React, { useState, useRef } from 'react'

import './CarouselEntryForm.css'

export default function CarouselEntryForm({ CarouselItem }) {
  const [carouselItem, setCarouselItem] = useState("")
  const [error, setError] = useState('')
  const inputRef = useRef()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    CarouselItem(carouselItem)
    setCarouselItem('')
    inputRef.current.focus()
  }

  const setEntry = (e) => {
    if (isNaN(e.target.value)) {
      setCarouselItem('')
      setError('Please Fill Only Numeric')
    } else {
      setCarouselItem(e.target.value)
      setError('')
    }
  }

  function handleOnClick() {
    CarouselItem(carouselItem)
  }
  return (
    <>
      <form className='CarouselEntryForm' onSubmit={handleOnSubmit}>
        <input
          type="text"
          className='CarouselEntryForm_input'
          placeholder='Please insert a Number'
          value={carouselItem}
          onChange={setEntry}
          maxLength='3'
          ref={inputRef}
        />
        <button onClick={handleOnSubmit} className='CarouselEntryForm_button' >Submit</button>
        <p className='CarouselEntryForm-error' >{error}</p>

      </form>
    </>
  )
}
