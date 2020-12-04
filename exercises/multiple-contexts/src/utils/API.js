import axios from 'axios';

export default {
  getUserInfo: () => {
    return axios.get(`https://randomuser.me/api/?results=1&nat=us&inc=login,name`);
  },
};
