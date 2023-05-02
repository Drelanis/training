import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const format = new Intl.NumberFormat('en-GB');
    return (
      <ul className="transactions">
        {this.props.transactions.map(({ id, from, to, amount, rate, time }) => (
          <Transaction
            key={id}
            from={from}
            to={to}
            amount={format.format(amount)}
            rate={rate}
            time={time}
          />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
