import { defineStore } from 'pinia';

export const useCookieStore = defineStore('cookie', {
  state: () => ({
    isCookieAccepted: localStorage.getItem('isCookieAccepted') === 'true',
  }),
  actions: {
    acceptCookie() {
      this.isCookieAccepted = true;
      localStorage.setItem('isCookieAccepted', 'true');
    },
  },
});