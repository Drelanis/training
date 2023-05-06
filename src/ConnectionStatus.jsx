import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    connection: true,
  };

  setOnlineStatus = () => {
    this.setState({
      connection: true,
    });
  };

  setOfflineStatus = () => {
    this.setState({
      connection: false,
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.setOnlineStatus);
    window.addEventListener('offline', this.setOfflineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setOnlineStatus);
    window.removeEventListener('offline', this.setOfflineStatus);
  }

  render() {
    return this.state.connection ? (
      <div className="status">Online</div>
    ) : (
      <div className="status status_offline">Offline</div>
    );
  }
}

export default ConnectionStatus;
