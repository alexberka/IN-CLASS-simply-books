/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
// import { useAuth } from '../utils/context/authContext';

export default function User({ user }) {
  return (
    <>
      <h1>{user.displayName}</h1>
      <img alt="Profile Pic" src={user.photoURL} />
      <h4>{user.email}</h4>
      <p>Last Sign In Time: {user.metadata.lastSignInTime}</p>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.string,
    metadata: PropTypes.shape({
      lastSignInTime: PropTypes.string,
    }),
  }),
};

User.defaultProps = {
  user: { name: 'Alex' },
};
