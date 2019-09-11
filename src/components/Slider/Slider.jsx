import React, { useState, useEffect } from 'react'

import './Slider.css'

export default function Slider({ items, onClick, index }) {
  const [isArrowLeftDisabled, setIsArrowLeftDisabled] = useState(true)
  const [isArrowRightDisabled, setIsArrowRightDisabled] = useState(true)

  useEffect(() => {
    index === 1 ? setIsArrowLeftDisabled(true) : setIsArrowLeftDisabled(false)
    !(index + 4 <= items.length) || items.length <= 4 ? setIsArrowRightDisabled(true) : setIsArrowRightDisabled(false)
  })

  const handleClick = (value) => {
    onClick(index + value)
  }

  return (
    <div className='Slider-container'>
      {items.length > 4 && <div className='Slider-arrow'>
        <button onClick={() => handleClick(-4)} disabled={isArrowLeftDisabled}> {'<'} </button>
      </div>}
      <div className='Slider-items'>
        {
          items.slice(index - 1, index + 3).map((item, i) => {
            return <div key={i} className='Slider-item'><img src={`https://picsum.photos/id/${200 + Number(item)}/200/300`} /></div>
          })}
      </div>
      {items.length > 4 && <div className='Slider-arrow'>
        <button onClick={() => handleClick(4)} disabled={isArrowRightDisabled} > {'>'} </button>
      </div>}
    </div>
  );
}
