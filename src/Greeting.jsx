import React, { Component } from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

class Greeting extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
  }
}

export default Greeting;
