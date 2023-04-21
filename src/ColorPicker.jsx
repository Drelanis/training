import React, { Component } from 'react';

class ColorPicker extends Component {
  renderColor = color => {
    document.querySelector('.picker__title').textContent = `${color}`;
  };

  resetTitle = () => {
    document.querySelector('.picker__title').textContent = '';
  };

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.renderColor('Coral')}
            onMouseLeave={this.resetTitle}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.renderColor('Aqua')}
            onMouseLeave={this.resetTitle}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.renderColor('Bisque')}
            onMouseLeave={this.resetTitle}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
