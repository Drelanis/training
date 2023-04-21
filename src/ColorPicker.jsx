import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      titleColor: '',
    };
  }

  renderColor = color => {
    this.setState({
      titleColor: color,
    });
  };

  resetTitle = () => {
    this.setState({
      titleColor: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.titleColor}</div>
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
