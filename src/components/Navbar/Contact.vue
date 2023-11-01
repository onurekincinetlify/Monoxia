<template>
    <div class="contact">
       <div class="contactbox">
            <div class="right-bg-mobile">
                <img src="/public/images/contact.jpg" alt="contact">
            </div>
            <div class="fields">
                <label class="label">Your Name</label>
                <input v-model="name" class="input" type="text"/>

                <label class="label">Your Email</label>
                <input v-model="email" class="input" type="email"/>

                <label class="label">Your Message</label>
                <textarea v-model="msg" class="input" />
                <p v-if="sentShow" class="sent">{{alertText}}</p>

                <button @click="send" class="button">Send</button>
            </div>
            <div class="right-bg">
                <img src="/public/images/contact.jpg" alt="contact">
            </div>
       </div>
    </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";

const name = ref('');
const email = ref('');
const msg = ref('');
const sentShow = ref(false);
const alertText = ref('');

// Girilen tüm verileri iletişim bölümüne gönderir.
const send = () => {
    axios.post('https://monoxia-5c690-default-rtdb.firebaseio.com/contact.json', {
        Username: localStorage.getItem('username'),
        Email: localStorage.getItem('email'),
        Name: name.value,
        SpecifiedEmail: email.value,
        Message: msg.value
    }).then(async (e) => {
        name.value = '';
        email.value = '';
        msg.value = '';
        if (e.status === 200) {
            alertText.value = "Your message has been sent";
            sentShow.value = true;
            await new Promise(resolve => setTimeout(resolve, 2000));
            sentShow.value = false;
        } else {
            alertText.value = "Your message hasn't been sent";
            sentShow.value = true;
            await new Promise(resolve => setTimeout(resolve, 2000));
            sentShow.value = false;
        }
    })
};
</script>

<style lang="scss" scoped>
@import "/public/scss/Navbar/ContactStyle.scss"
</style>