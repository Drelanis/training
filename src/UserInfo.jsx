import React from 'react';
import Avatar from './Avatar.jsx';
import './userInfo.scss';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YYYY');

const UserInfo = props => {
  return (
    <>
      <div className="user-info">
        <Avatar avatarUrl={props.avatarUrl} name={props.name} />
        <div className="user-info__name">{props.name}</div>
      </div>
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </>
  );
};
export default UserInfo;
