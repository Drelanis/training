import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  constructor(props) {
    super(props);
  }

  formateNumber = number => {
    return new Intl.NumberFormat('en-GB').format(number);
  };

  render() {
    return (
      <ul className="transactions">
        {this.props.transactions.map(({ id, from, to, amount, rate, time }) => (
          <Transaction
            key={id}
            from={from}
            to={to}
            amount={amount}
            rate={rate}
            time={time}
            format={this.formateNumber}
          />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
