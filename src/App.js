import React from 'react';
import { store, view } from '@risingstack/react-easy-state';
import Count from './Count';
import './App.css';

class App extends React.Component {
  counter = store({ count: 0 });
  incrementUp = () => this.counter.count++;
  incrementDown = () => this.counter.count--;

  componentDidMount() {
    this.interval = setInterval(() => {
      const currentTime = new Date().getHours();
      
      if (currentTime >= 9 && currentTime < 17) {
        this.incrementUp();
      }
   
      if (currentTime >= 18 || currentTime < 8) {
        this.incrementDown();
      }
    }, 60 * 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { count } = this.counter;

    return (
      <div>
        <h1>Tonebase Counter App</h1>

        <Count count={count} />

        <button 
          type="button" 
          onClick={this.incrementUp}
        >
          Increment UP
        </button>
        <button 
          type="button"
          onClick={this.incrementDown}
        >
          Increment DOWN
        </button>
      </div>
    );
  }
}

export default view(App);