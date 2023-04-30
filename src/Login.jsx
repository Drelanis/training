import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btn login" onClick={this.props.onLogout}>
        Login
      </button>
    );
  }
}

export default Login;
