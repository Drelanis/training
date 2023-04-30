import React, { Component } from 'react';
import Info from './Info.jsx';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
    };
  }

  renderText = text => {
    this.setState({
      info: text,
    });
  };

  clear() {
    this.setState({
      info: null,
    });
  }

  render() {
    return (
      <div className="page">
        <Info info={this.state.info} />
        <div className="actions">
          <button
            className="btn"
            onClick={() => this.renderText('IPhone 13 - Price is 500$. Available in 2 colors')}
          >
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.renderText('Price is 650$. Not available')}>
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={() => this.clear()}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
