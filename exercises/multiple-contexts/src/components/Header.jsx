import React, { useContext } from 'react';
import LoginInfo from './LoginInfo';
import ThemeContext from '../utils/ThemeContext';
import CountContext from '../utils/CountContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const count = useContext(CountContext);

  return (
    <header className={`header ${theme === 'dark' ? 'header--dark-mode' : ''}`}>
      <h1>
        {theme[0].toUpperCase() + theme.slice(1)} Theme - Multiple Contexts
        Example
      </h1>
      {count < 5 ? (
        <h2>You logged in {count} times!</h2>
      ) : (
        <h2>No more logins for today!</h2>
      )}
      {/* upper right corner of UI */}

      <LoginInfo />
    </header>
  );
};

export default Header;
