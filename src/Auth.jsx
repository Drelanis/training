import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Greeting from './Greeting.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    let button;

    if (this.state.isLoggedIn) {
      button = <Logout onLogout={this.handleLogin} />;
    } else {
      button = <Login onLogin={this.handleLogout} />;
    }

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Auth;
