// import axios from '../utils/request';
//
// export const login = (data) => {
//   return axios.post('/api/auth/login', data);
// };
//
// export const register = (data) => {
//   return axios.post('/api/auth/register', data);
// };
import axios from 'axios';

export const login = (username, password) => {
  return axios.post('/api/login', { username, password });
};

export const register = (username, password) => {
  return axios.post('/api/register', { username, password });
};
