// import { defineStore } from 'pinia';
//
// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     user: null,
//     token: null,
//   }),
//   actions: {
//     login(data) {
//       this.user = data.user;
//       this.token = data.token;
//     },
//     logout() {
//       this.user = null;
//       this.token = null;
//     },
//   },
// });
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
  },
});
