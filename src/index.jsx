import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './Greeting.jsx';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

const birthDate = new Date();

ReactDOM.render(<Greeting firstName="John" lastName="Doe" birthDate={birthDate} />, rootElement);
