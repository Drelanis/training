import React, { Component } from 'react';
import Info from './Info.jsx';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
    };
  }

  getInfoAboutFirstProduct() {
    this.setState({
      info: 'Price is 500$. Available in 2 colors',
    });
  }

  getInfoAboutSecondProduct() {
    this.setState({
      info: 'Price is 650$. Not available in 1 color',
    });
  }

  clear() {
    this.setState({
      info: '',
    });
  }

  render() {
    return (
      <div className="page">
        {this.state.info ? <Info info={this.state.info} /> : null}
        <div className="actions">
          <button className="btn" onClick={() => this.getInfoAboutFirstProduct()}>
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.getInfoAboutSecondProduct()}>
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
