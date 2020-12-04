import React, { useContext } from 'react';
import LoginInfo from './LoginInfo';
import ThemeContext from '../utils/ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme === 'dark' ? 'header--dark-mode' : ''}`}>
      <h1>
        {theme[0].toUpperCase() + theme.slice(1)} Theme - Multiple Contexts
        Example
      </h1>
      {/* upper right corner of UI */}
      <LoginInfo />
    </header>
  );
};

export default Header;
