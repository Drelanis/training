import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement);

const element = <h1 class="title">Todo List</h1>;

root.render(element, root);
