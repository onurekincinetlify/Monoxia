import { defineStore } from 'pinia';

export const useCookieStore = defineStore('cookie', {
  state: () => ({
    isCookieAccepted: localStorage.getItem('isCookieAccepted') === 'true',
    registered: false,
    username: localStorage.getItem('username')
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
    },
    setUsername(usernameValue: any) {
      this.username = usernameValue;
    }
  },
});