import React, { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext';
import UserContext from '../utils/UserContext';

const MainContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { username, loggedIn } = useContext(UserContext);

  return (
    <div className={`content ${theme === 'dark' ? 'content--dark-mode' : ''}`}>
      <h2>
        Welcome to the Context API, {username}. You are{' '}
        {!loggedIn ? 'not' : 'VERY'} logged in!
      </h2>
      <h3>
        The current theme is {theme}! Wanna change it?
        <button type="button" onClick={toggleTheme}>
          {/* toggle button text */}
          Toggle Theme to {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </h3>
    </div>
  );
};

export default MainContent;
