import React from 'react';
import moment from 'moment';

const Profile = props => {
  const age = moment(props.userData.birthDate).format('DD MMM YY');

  return (
    <div className="profile__birth">
      {props.userData.firstName} {props.userData.lastName} Was born {age} in{' '}
      {props.userData.birthPlace}.
    </div>
  );
};

export default Profile;
