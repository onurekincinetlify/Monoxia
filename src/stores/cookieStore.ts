import { defineStore } from 'pinia';

export const useCookieStore = defineStore('cookie', {
  state: () => ({
    isCookieAccepted: localStorage.getItem('isCookieAccepted') === 'true',
    registered: false
  }),
  actions: {
    acceptCookie() {
      this.isCookieAccepted = true;
      localStorage.setItem('isCookieAccepted', 'true');
    },
    setRegistered() {
      this.registered = true;
    },
    exit() {
      this.registered = false;
    }
  },
});