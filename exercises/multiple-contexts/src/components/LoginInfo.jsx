import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';
import CountContext from '../utils/CountContext';

const LoginInfo = () => {
  const { username, loggedIn, toggleLoggedIn } = useContext(UserContext);
  const { count, setCount } = useContext(CountContext);

  const handleCount = () => {
    loggedIn ? setCount(count + 1) : null;
  };

  return (
    <p>
      <span>
        <strong>Username:</strong> {username}
      </span>
      <span>
        {/* .toString() to output boolean as a string */}
        <strong>Logged In:</strong> {loggedIn.toString()}
      </span>
      <button
        type="button"
        onClick={() => {
          toggleLoggedIn();
          handleCount();
        }}
        disabled={count < 5 ? false : true}
      >
        {loggedIn ? 'Log Out' : 'Log In'}
      </button>
    </p>
  );
};

export default LoginInfo;
