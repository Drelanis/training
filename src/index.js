import './styles.css';
import React from 'react';
import { render } from 'react-dom';

const rootElement = document.querySelector('#root');

const greetingElement = React.createElement('div', { className: 'greeting' }, 'Hello, React!');

ReactDOM.render(greetingElement, rootElement);
