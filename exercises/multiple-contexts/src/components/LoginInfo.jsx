import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

const LoginInfo = () => {
  const { username, loggedIn, toggleLoggedIn } = useContext(UserContext);

  return (
    <p>
      <span>
        <strong>Username:</strong> {username}
      </span>
      <span>
        {/* .toString() to output boolean as a string */}
        <strong>Logged In:</strong> {loggedIn.toString()}
      </span>
      <button type="button" onClick={toggleLoggedIn}>
        {loggedIn ? 'Log Out' : 'Log In'}
      </button>
    </p>
  );
};

export default LoginInfo;
