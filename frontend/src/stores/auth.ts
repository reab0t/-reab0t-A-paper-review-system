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
    user: null as any,
    token: null as string | null,
  }),
  actions: {
    setUser(user: any) {
      this.user = user;
    },
    setToken(token: string) {
      this.token = token;
    },
    logout() {
      this.user = null;
      this.token = null;
      // 可选：清除本地存储token
      localStorage.removeItem('token');
    },
  },
});
