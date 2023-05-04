import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-4',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-5',
    age: 31,
    name: 'Dan',
  },
  {
    id: 'id-6',
    age: 19,
    name: 'Mat',
  },
  {
    id: 'id-7',
    age: 27,
    name: 'Kat',
  },
  {
    id: 'id-8',
    age: 25,
    name: 'Ann',
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
