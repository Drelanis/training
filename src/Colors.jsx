import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBackgroundColor = event => {
    document.body.style.backgroundColor = event.target.style.backgroundColor;
  };

  render() {
    return (
      <div className="colors">
        <div
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={this.setBackgroundColor}
        ></div>
        <div
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={this.setBackgroundColor}
        ></div>
        <div
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={this.setBackgroundColor}
        ></div>
      </div>
    );
  }
}

export default Colors;
