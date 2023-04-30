import React, { Component } from 'react';
import Info from './Info.jsx';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }

  setText = text => {
    this.setState({
      text,
    });
  };

  render() {
    return (
      <div className="page">
        <Info info={this.state.text} />
        <div className="actions">
          <button
            className="btn"
            onClick={() => this.setText('Price is 500$. Available in 2 colors')}
          >
            IPhone 13
          </button>
          <button
            className="btn"
            onClick={() => this.setText('Price is 650$. Not available in 1 color')}
          >
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={() => this.setText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
