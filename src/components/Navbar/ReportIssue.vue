<template>
    <div class="contact">
       <div class="contactbox">
            <div class="fields">
                <h1>What's the issue</h1>
                <p>If your problem is related to your account, please specify your email and password in the message box afterwards. You can also write other problems (compatibility problems, any problems with the dashboard, etc.)</p>
                <label class="label">Your Message</label>
                <textarea v-model="msg" class="input" />
                <p v-if="sentShow" class="sent">{{alertText}}</p>

                <button @click="send" class="button">Send</button>
            </div>
            <div class="right-bg">
                <img src="/public/images/issue2.jpg" alt="contact">
            </div>
       </div>
    </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
const msg = ref('');
const sentShow = ref(false)
const alertText = ref('')
const send = () => {
    axios.post('https://monoxia-5c690-default-rtdb.firebaseio.com/report.json', {
        Username: localStorage.getItem('username'),
        Email: localStorage.getItem('email'),
        IssueMessage : msg.value
    }).then(async(e)=> {
        msg.value = ''
        if (e.status === 200) {
            alertText.value = "Your message has been sent";
            sentShow.value = true
            await new Promise(resolve => setTimeout(resolve, 2000));
            sentShow.value = false
        } else {
            alertText.value = "Your message hasn't been sent";
            sentShow.value = true
            await new Promise(resolve => setTimeout(resolve, 2000));
            sentShow.value = false
        }
    })
}
</script>

<style lang="scss" scoped>
@import "/public/scss/ReportStyle.scss";
</style>