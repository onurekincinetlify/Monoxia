<template>
     <div class="about">
       <div class="aboutbox">
            <div class="right-bg-mobile">
                <img src="/images/banned.jpg" alt="contact">
            </div>
            <div class="fields">
                <h1 style="color:red;">You're banned</h1>
                <p style="margin-bottom: 10px;">You have been banned by the site owner. This decision has been made due to your violation of the site rules or policies. You no longer have access to the resources, content, or interactions provided by the site. We recognize that you are a valued user, and our aim is to provide an equal experience to everyone.</p>
                <p style="margin-bottom: 10px;">However, upon reviewing your actions, we have determined that you have violated certain rules or policies. The necessity of this action is to safeguard the integrity, security, and experience of other users on the site.</p>
                <p style="color:red;">You have been banned from the site for 90 days.</p>
            </div>
            <div class="right-bg">
                <img src="/images/banned.jpg" alt="contact">
            </div>
       </div>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

axios.get('https://api.ipify.org').then((response) => {
         const ip = response.data;
         axios.post('https://monoxia-5c690-default-rtdb.firebaseio.com/banned.json', {
            Time: new Date().toLocaleString(),
            ip: ip
         })
      })
</script>

<style lang="scss" scoped>
@import "/public/scss/Navbar/AboutStyle.scss";
</style>