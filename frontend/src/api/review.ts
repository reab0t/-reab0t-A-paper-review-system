import axios from 'axios';

export const getReviews = () => {
  return axios.get('/api/reviews');
};

export const getReview = (id) => {
  return axios.get(`/api/reviews/${id}`);
};

export const submitReview = (id, review) => {
  return axios.post(`/api/reviews/${id}`, review);
};
