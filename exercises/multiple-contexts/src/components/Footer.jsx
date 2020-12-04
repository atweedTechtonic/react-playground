import React, { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme === 'dark' ? 'footer--dark-mode' : ''}`}>
      Techtonic - ©2020 (but not really)
    </footer>
  );
};

export default Footer;
