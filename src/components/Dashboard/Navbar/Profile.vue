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
        <input type="file">
        <!-- <button class="button uploadBtn">Upload</button> -->
      </div>
      <label class="label">Change Email : </label>
      <div class="input-wrapper">
        <input id="newEmail" class="input" type="text" placeholder="ares@outlook.com">
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
import { ref } from "vue";
import axios from 'axios';
import { useCookieStore } from "/src/stores/cookieStore";
import eventBus from "/src/stores/eventBus";
import { collection,setDoc, addDoc, doc, updateDoc, deleteField } from "firebase/firestore"
import {db} from '../../../firebase'
import { getAuth, updateEmail, onAuthStateChanged } from "firebase/auth";


const defaultImg = ref('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png?20160314153816')
const auth = getAuth();

const changeEmail = () => {
    const newEmail:any = document.getElementById('newEmail').value
  onAuthStateChanged(auth, (user) => {
    if (user) {
      updateEmail(user, newEmail)
        .then(() => {
          console.log("E-posta adresi güncellendi");
           document.getElementById('newEmail').value = ''
        })
        .catch((error) => {
          console.log("E-posta adresi güncellenirken bir hata oluştu", error);
        });
    } else {
      console.log("Oturum açmış bir kullanıcı bulunamadı");
    }
  });
};


const setupUsername = async () => {
    // @ts-ignore
    const username:any = document.getElementById('username').value!;
    if (username) {
        const colRef = collection(db, 'addedExtra')
        const id:any = localStorage.getItem('userCookie')
        const dataObj = {
            localId: localStorage.getItem('userCookie'),
            username: username,
        }
        const docRef = doc(colRef, id); 
        await setDoc(docRef, dataObj); // Belgeyi ekleyin

        console.log('Document was created with ID:', docRef.id)
        localStorage.setItem('username', username)
        useCookieStore().setUsername(username)
        eventBus.emit('ProfileUsername', username)
    } else {
        alert('Kullanıcı Adı Boş Olamaz')
    }
}
</script>

<style scoped lang="scss">
@import '/public/scss/ProfileStyle.scss';
</style>