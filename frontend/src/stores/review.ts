import { defineStore } from 'pinia';

export const useReviewStore = defineStore('review', {
  state: () => ({
    reviews: [],
  }),
  actions: {
    setReviews(reviews) {
      this.reviews = reviews;
    },
  },
});
