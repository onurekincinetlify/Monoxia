<template>
  <div class="settings">
    <div class="setting-options">
      <label class="label">Create a username : </label>
      <div class="input-wrapper">
        <input class="input" id="username" type="text" placeholder="Enter your new username.">
        <button @click="setupUsername" class="button">Save</button>
      </div>
      <img :src="defaultImg" alt="default profile picture">
      <label class="label">Setup Profile Picture : </label>
      <div class="input-wrapper">
        <input id="file-input" type="file">
        <!-- <button class="button uploadBtn">Upload</button> -->
      </div>
      <label class="label">Change Email : </label>
      <div class="input-wrapper">
        <input v-model="newEmail" id="newEmail" class="input" type="text" placeholder="ares@outlook.com">
        <button @click="changeEmail" class="button">Save</button>
      </div>
      <label class="label">Verify Your Email : </label>
      <div class="input-wrapper">
        <input disabled class="input" type="text" placeholder="Text input">
        <button class="button is-success">Send Code</button>
        <button class="button">Verify</button>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
// Firebase Kütüphaneleri 
import { getAuth, updateEmail, onAuthStateChanged } from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
import { useCookieStore } from "/src/stores/cookieStore";
import { db } from '../../../firebase';

import eventBus from "/src/stores/eventBus";
import { ref } from "vue";

// Gerekli değişkenler.
const defaultImg = ref('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png?20160314153816')
const auth = getAuth();
const newEmail: any = ref(null);

// Email adresini günceller.
// POINTED.
const changeEmail = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      updateEmail(user, newEmail.value)
        .then(() => {
          alert("E-posta adresiniz güncellendi.");
           newEmail.value = ''
        })
        .catch((error) => {
          alert("E-posta adresiniz güncellenirken bir hata oluştu.");
        });
    } else {
      alert("Oturum açmış bir kullanıcı bulunamadı.");
    }
  });
};

// Kullanıcı adını Dashboard'a ekler.
// Kullanıcı adını Firebase'e kaydeder.
// EventBus ile kaydedilen veriyi Dashboard'a iletir.
// POINTED.
const setupUsername = async () => {
    const usernameEl: HTMLInputElement | null = document.getElementById('username') as HTMLInputElement;
    const username: string = usernameEl?.value;
    if (username) {
        const colRef = collection(db, 'addedExtra');
        const id: any = localStorage.getItem('userCookie');
        const dataObj = {
          localId: localStorage.getItem('userCookie'),
          username: username,
        };
        const docRef = doc(colRef, id); 
        await setDoc(docRef, dataObj);
        localStorage.setItem('username', username); // Kullanıcı adını LocalStorage'e kaydeder.
        useCookieStore().setUsername(username); // KUllanıcı adını Store'a kaydeder.
        eventBus.emit('ProfileUsername', username); // Kullanıcı adının anlık olarak iletilmesini sağlar.
    } else {
      alert('Kullanıcı Adı Boş Olamaz');
    }
}
</script>

<style scoped lang="scss">
@import '/public/scss/Dashboard/Navbar/ProfileStyle.scss';
</style>