import React, { Component } from 'react';

const RED = '#ff0000';
const GREEN = '#008000';
const BLUE = '#0000ff';

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
      <>
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
      </>
    );
  }
}

export default Colors;
