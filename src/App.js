import React from 'react';

import CarouselEntryForm from './components/CarouselEntryForm';
import Slider from './components/Slider';
import Pagination from './components/Pagination';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      index: 1
    }
  }

  render() {
    const handleCarouselItem = (item) => {
      let list = this.state.items
      list.push(item)
      this.setState({ items: list })
    }
    const handleClick = (index) => {
      this.setState({ index })
    }
    const handlePageClick = (pageIndex) => {
      this.setState({ index: pageIndex })
      console.log('app handlePageClick', pageIndex, this.state.index);
    }
    return (
      <div className="Carousel">
        <Header />
        <CarouselEntryForm CarouselItem={handleCarouselItem} />
        <Slider items={this.state.items} onClick={handleClick} index={this.state.index} />
        <Pagination itemCount={this.state.items.length} index={this.state.index} onPageClick={handlePageClick} />
      </div >
    );
  }
}

const Header = () => <div className="Carousel-header">Carousel App</div>

export default App;
