import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const element = <div className="greeting">Hello, React!</div>;

ReactDOM.render(element, rootElement);
