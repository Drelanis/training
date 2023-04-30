import React, { Component } from 'react';

class Mailbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unreadMessages: props.unreadMessages,
    };
  }

  render() {
    return (
      <div className="mailbox">
        <span className="mailbox__text">MESSAGES</span>
        {this.state.unreadMessages.length > 0 && (
          <span className="mailbox__count">{this.state.unreadMessages.length}</span>
        )}
      </div>
    );
  }
}

export default Mailbox;
