import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="btn logout" onClick={this.props.onLogin}>
        Logout
      </button>
    );
  }
}

export default Logout;
