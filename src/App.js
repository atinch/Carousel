import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const elements = [1, 2, 3, 4, 5, 6]
  const [items, setItems] = useState([1, 2, 3, 4])
  const [index, setIndex] = useState(1)
  const [isArrowLeftDisabled, setIsArrowLeftDisabled] = useState(true)
  const [isArrowRightDisabled, setIsArrowRightDisabled] = useState(false)

  useEffect(() => {
    index === 1 ? setIsArrowLeftDisabled(true) : setIsArrowLeftDisabled(false)
    setItems(elements.splice(index - 1, 4))
    index === 3 ? setIsArrowRightDisabled(true) : setIsArrowRightDisabled(false)
  }, [index])

  return (
    <div className="Carousel">
      <Header />
      <div className='Carousel-container'>
        <div className='Carousel-arrow'>
          <button onClick={() => setIndex(index - 1)} disabled={isArrowLeftDisabled}> {'<'} </button>
        </div>
        {items.map((item, i) => {
          return <div key={i} className='Carousel-item'>{item}</div>
        })}
        <div className='Carousel-arrow'>
          <button onClick={() => setIndex(index + 1)} disabled={isArrowRightDisabled} > {'>'} </button>
        </div>
      </div>
    </div >
  );
}

const Header = () => <div className="Carousel-header">Carousel App</div>

export default App;
