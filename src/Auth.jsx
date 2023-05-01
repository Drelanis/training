import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  }

  handleLogin = () => {
    this.setState({ isProcessing: true });
    setTimeout(() => {
      this.setState({ isLoggedIn: true, isProcessing: false });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let button;

    if (this.state.isLoggedIn) {
      button = <Logout onLogout={this.handleLogout} />;
    } else {
      button = <Login onLogin={this.handleLogin} />;
    }

    return this.state.isProcessing ? <Spinner size={'34px'} /> : button;
  }
}

export default Auth;
