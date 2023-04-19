import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const rootElement = document.querySelector('#root');

const getSeconds = () => {
  const seconds = new Date().getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const color = seconds % 2 !== 0 ? '#fff' : '#000';

  const styles = {
    color,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      Now is {seconds}
    </div>
  );

  ReactDOM.render(element, rootElement);
};

setInterval(() => getSeconds(), 1000);
