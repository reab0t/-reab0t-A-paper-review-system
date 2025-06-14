import axios from 'axios';

export const getPapers = () => {
  return axios.get('/api/papers');
};

export const getPaper = (id) => {
  return axios.get(`/api/papers/${id}`);
};

export const uploadPaper = (file) => {
  return axios.post('/api/papers', file);
};
