import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: 0,
    };
  }

  decrement = () => {
    this.setState({
      startValue: this.state.startValue - 1,
    });
  };

  increment = () => {
    this.setState({
      startValue: this.state.startValue + 1,
    });
  };

  reset = () => {
    this.setState({
      startValue: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <button data-action="decrease" className="counter__button" onClick={this.decrement}>
          -
        </button>
        <span className="counter__value" onClick={this.reset}>
          {this.state.startValue}
        </span>
        <button data-action="increase" className="counter__button" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
