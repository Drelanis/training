import React from 'react';
import './comment.scss';
import UserInfo from './UserInfo.jsx';

const Comment = props => {
  return (
    <div className="comment">
      <UserInfo
        avatarUrl={props.author.avatarUrl}
        name={props.author.name}
        date={props.author.date}
      />
    </div>
  );
};

export default Comment;
