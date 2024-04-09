import React from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import SignOut from '../components/SignOut';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <User user={user} />
      <SignOut />
    </>
  );
}
