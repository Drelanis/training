import React, { Component } from 'react';

class GoodButton extends Component {
  showText = event => {
    alert(event.target.textContent);
  };

  render() {
    return (
      <button className="fancy-button" onClick={event => this.showText(event)}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
