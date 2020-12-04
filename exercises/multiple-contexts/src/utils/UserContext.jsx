import { createContext } from 'react';

const UserContext = createContext({
  username: '',
  name: '',
  loggedIn: false,
  toggleLoggedIn: () => {}, // represents function
});

export default UserContext;
