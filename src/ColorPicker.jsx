import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
  }

  pickerTitle() {
    return document.querySelector('.picker__title');
  }

  renderColor = color => {
    this.pickerTitle().textContent = `${color}`;
  };

  reset = () => {
    this.pickerTitle().textContent = '';
  };

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.renderColor('Coral')}
            onMouseLeave={this.reset}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.renderColor('Aqua')}
            onMouseLeave={this.reset}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.renderColor('Bisque')}
            onMouseLeave={this.reset}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
