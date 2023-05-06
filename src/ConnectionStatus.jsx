import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    connection: true,
  };

  setStatusOfConnection = () => {
    this.setState({
      connection: window.navigator.onLine,
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.setStatusOfConnection);
    window.addEventListener('offline', this.setStatusOfConnection);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setStatusOfConnection);
    window.removeEventListener('offline', this.setStatusOfConnection);
  }

  render() {
    return this.state.connection ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}

export default ConnectionStatus;
