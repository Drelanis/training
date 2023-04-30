import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="message">{this.props.info}</div>;
  }
}

export default Info;
