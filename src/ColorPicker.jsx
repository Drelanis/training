import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
  }

  pickerTitle() {
    return document.querySelector('.picker__title');
  }

  renderColor = event => {
    if (event.target.className.split(' ').includes('picker__button_coral'))
      this.pickerTitle().textContent = 'coral';
    if (event.target.className.split(' ').includes('picker__button_aqua'))
      this.pickerTitle().textContent = 'aqua';
    if (event.target.className.split(' ').includes('picker__button_bisque'))
      this.pickerTitle().textContent = 'bisque';
  };

  reset = () => {
    const pickerTitle = document.querySelector('.picker__title');
    this.pickerTitle().textContent = '';
  };

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.renderColor}
            onMouseOut={this.reset}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.renderColor}
            onMouseOut={this.reset}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.renderColor}
            onMouseOut={this.reset}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
