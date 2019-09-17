import React, { useState } from 'react';

import CarouselEntryForm from './components/CarouselEntryForm';
import Slider from './components/Slider';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [index, setIndex] = useState([1])

  const handleCarouselItem = (e, item) => {
    console.log('ffff', item);
    let list = items
    list.push(item)
    setItems(list)
  }
  const handleClick = (index) => {
    setIndex(index)
  }
  const handlePageClick = (pageIndex) => {
    setIndex(pageIndex)
    console.log('app handlePageClick', pageIndex, index);
  }
  return (
    <div className="Carousel">
      <Header />
      <CarouselEntryForm CarouselItem={handleCarouselItem} />
      <Slider items={items} onClick={handleClick} index={index} />
      <Pagination itemCount={items.length} index={index} onPageClick={handlePageClick} />
    </div >
  );
}

const Header = () => <div className="Carousel-header">Carousel App</div>

export default App;
