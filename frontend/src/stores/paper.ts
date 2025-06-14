import { defineStore } from 'pinia';

export const usePaperStore = defineStore('paper', {
  state: () => ({
    papers: [],
  }),
  actions: {
    setPapers(papers) {
      this.papers = papers;
    },
  },
});
