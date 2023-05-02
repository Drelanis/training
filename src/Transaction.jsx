import moment from 'moment/moment';
import React from 'react';

const Transaction = ({ from, to, amount, rate, time }) => {
  const formatAmount = new Intl.NumberFormat('en-GB');
  const formatTime = moment(time);
  return (
    <li className="transaction">
      <span className="transaction__date">{formatTime.format('DD MMM')}</span>
      <span className="transaction__time">{formatTime.format('HH:mm')}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formatAmount.format(amount)}</span>
    </li>
  );
};

export default Transaction;
