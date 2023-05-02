import React, { Component } from 'react';
import User from './User.jsx';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingBy: null,
    };
  }

  toggleSorting = () => {
    this.setState({
      sortingBy: this.state.sortingBy === 'asc' ? 'desc' : 'asc',
    });
  };

  render() {
    let sortingUsers;
    if (this.state.sortingBy) {
      sortingUsers = this.props.users.slice().sort((a, b) => {
        return this.state.sortingBy === 'asc' ? a.age - b.age : b.age - a.age;
      });
    } else {
      sortingUsers = this.props.users;
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sortingBy || '-'}
        </button>
        <ul className="users">
          {sortingUsers.map(({ name, age, id }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
