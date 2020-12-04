import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ThemeContext from './utils/ThemeContext'; // import context
import UserContext from './utils/UserContext'; // import context
import CountContext from './utils/CountContext';
import API from './utils/API';

const App = () => {
  const [theme, setTheme] = useState('light'); // note that toggleTheme is not included until line 48

  const [userData, setUserData] = useState({
    username: '',
    name: '',
    loggedIn: false,
    // note that toggleLoggedIn is not included until line 49
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    API.getUserInfo()
      .then(({ data }) => {
        console.log('data', data);
        const user = data.results[0]; // extract first item
        const { username } = user.login;
        const name = user.name.first;

        setUserData({ ...userData, username, name });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    document.title = `${
      theme[0].toUpperCase() + theme.slice(1)
    } Theme - Multiple Contexts Example`;
  }); //

  // prevTheme - state right before updating (using to know what previous state is in order to update)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLoggedIn = () => {
    setUserData({ ...userData, loggedIn: !userData.loggedIn });
  };

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <UserContext.Provider value={{ ...userData, toggleLoggedIn }}>
          <CountContext.Provider value={{ count, setCount }}>
            <Header />
            <MainContent />
          </CountContext.Provider>
        </UserContext.Provider>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
