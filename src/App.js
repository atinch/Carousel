import React from 'react';

import CarouselEntryForm from './components/CarouselEntryForm';
import Slider from './components/Slider';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      items: []
    }
  }

  render() {

    const handleCarouselItem = (item) => {
      let list = this.state.items
      list.push(item)
      this.setState({ items: list })
    }
    return (
      <div className="Carousel">
        <Header />
        <CarouselEntryForm CarouselItem={handleCarouselItem} />
        <Slider items={this.state.items} />
      </div >
    );
  }
}

const Header = () => <div className="Carousel-header">Carousel App</div>

export default App;
