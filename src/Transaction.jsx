import moment from 'moment/moment';
import React from 'react';

const Transaction = ({ from, to, amount, rate, time }) => {
  const date = moment(time).format('DD MMM');
  const correctTime = moment(time).format('hh:mm');
  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{correctTime}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{new Intl.NumberFormat('en-GB').format(rate)}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};

export default Transaction;
