import React, { useState, useEffect } from 'react'

import './Slider.css'

export default function Slider({ items }) {

  const [index, setIndex] = useState(1)
  const [isArrowLeftDisabled, setIsArrowLeftDisabled] = useState(true)
  const [isArrowRightDisabled, setIsArrowRightDisabled] = useState(true)

  useEffect(() => {
    console.log('fff')
    index === 1 ? setIsArrowLeftDisabled(true) : setIsArrowLeftDisabled(false)
    index === items.length - 3 || items.length < 5 ? setIsArrowRightDisabled(true) : setIsArrowRightDisabled(false)
  })

  return (
    <div className="Slider">
      <div className='Slider-container'>
        <div className='Slider-arrow'>
          <button onClick={() => setIndex(index - 1)} disabled={isArrowLeftDisabled}> {'<'} </button>
        </div>
        {
          items.slice(index - 1, index + 3).map((item, i) => {
            return <div key={i} className='Slider-item'>{item}</div>
          })}
        <div className='Slider-arrow'>
          <button onClick={() => setIndex(index + 1)} disabled={isArrowRightDisabled} > {'>'} </button>
        </div>
      </div>
    </div >
  );
}
