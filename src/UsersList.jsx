import React, { Component } from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalItems: this.props.users.length,
      itemsPerPage: 3,
    };
  }

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  getCurrentUsersOnPage = () => {
    const copyArray = this.props.users.slice();
    return this.state.currentPage === 1
      ? copyArray.splice(0, this.state.itemsPerPage)
      : copyArray.splice(
          (this.state.currentPage - 1) * this.state.itemsPerPage,
          this.state.itemsPerPage,
        );
  };

  render() {
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.state.totalItems}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">
          {this.getCurrentUsersOnPage().map(({ name, age, id }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
