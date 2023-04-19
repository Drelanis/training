import React from 'react';

const getYearsOld = birthDate => new Date().getUTCFullYear() - birthDate;

const Greeting = props => {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I am {getYearsOld(props.birthDate)} years old
    </div>
  );
};

export default Greeting;
