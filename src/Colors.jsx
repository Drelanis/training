import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <div
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={() => this.setBodyColor(RED)}
        ></div>
        <div
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyColor(GREEN)}
        ></div>
        <div
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBodyColor(BLUE)}
        ></div>
      </div>
    );
  }
}

export default Colors;
