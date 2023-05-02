import React from 'react';

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map(element => (
        <li key={element}>{element}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
