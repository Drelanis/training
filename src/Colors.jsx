import React, { Component } from 'react';

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
    };
  }

  setBackgroundColor = event => {
    document.body.style.backgroundColor = event.target.style.backgroundColor;
  };

  render() {
    return (
      <div
        className="colors__button"
        style={{ backgroundColor: this.state.color }}
        onClick={this.setBackgroundColor}
      ></div>
    );
  }
}

export default Colors;
