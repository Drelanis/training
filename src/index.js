import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, React!</div>
    <div className="greeting__text">I'am learning React</div>
  </div>
);

ReactDOM.render(element, rootElement);
