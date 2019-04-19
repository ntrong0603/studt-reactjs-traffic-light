import React, { Component } from 'react';
import './App.css';

import TrafficLight from './components/TrafficLight';

// state trang thai noi tai ben trong compnent
// 3 trang thai
const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor(){
    super();
    this.state= {
        curentColor: RED
    };

    setInterval(() => {
        this.setState({
            curentColor: this.getNextColor(this.state.curentColor)
        });
    }, 1000);
  }
  getNextColor(color){
    switch(color){
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
    }
}
  render() {
    const {curentColor} =this.state;
    return (
      <div className="App">
        <TrafficLight curentColor = {curentColor}/>
      </div>
    );
  }
}

export default App;
