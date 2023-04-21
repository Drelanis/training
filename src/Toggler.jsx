import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleValue: props.toggleValue,
    };
  }

  changeButtonContent = event => {
    event.target.textContent === 'Off'
      ? this.setState({
          toggleValue: 'On',
        })
      : this.setState({
          toggleValue: 'Off',
        });
  };

  render() {
    return (
      <div className="toggler" onClick={this.changeButtonContent}>
        {this.state.toggleValue}
      </div>
    );
  }
}

export default Toggler;
