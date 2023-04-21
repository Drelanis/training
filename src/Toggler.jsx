import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleValue: props.toggleValue,
    };
  }

  changeButtonContent = () => {
    this.state.toggleValue
      ? this.setState({
          toggleValue: false,
        })
      : this.setState({
          toggleValue: true,
        });
  };

  render() {
    return (
      <div className="toggler" onClick={this.changeButtonContent}>
        {this.state.toggleValue ? 'Off' : 'On'}
      </div>
    );
  }
}

export default Toggler;
