<template>
    <div id="signInStyle">
        <div id="inputs">
            <label class="label">Email</label>
            <input id="mail" :class="{validFormat: anyIssueInMail === false, invalidFormat: anyIssueInMail === true}" v-model="mailData" class="input is-normal" type="email" placeholder="Enter your account email" />
            <small class="miniInfoText" v-if="mailHiddenTips">Example : afrodit@monoxia.com</small>
            <label class="label">Password</label>
            <input id="password" :class="{validFormat: anyIssueInPassword === false, invalidFormat: anyIssueInPassword === true}" v-model="passwordData" class="input is-normal" type="password" placeholder="Enter your account password" />
            <small class="miniInfoText" v-if="passwordHiddenTips">The password must be at least 8 characters long.</small>
            <div class="fields">
                <a>Don't have an account?</a>
            </div>
        </div>
        <div class="buttonWrapper">
            <input @click="loginFn" :class="`${shakeAsync}`" class="btn" type="submit" value="Login" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const mailData = ref('')
const passwordData = ref('')

const anyIssueInMail = ref(true)
const anyIssueInPassword = ref(true)

const mailHiddenTips = ref(false)
const passwordHiddenTips = ref(false)

const shakeAsync = ref(``)

async function clearShake() {
    await new Promise(resolve => setTimeout(resolve, 900));
    shakeAsync.value = ``
}

const loginFn = async () => {
    if (anyIssueInMail.value === false && anyIssueInPassword.value === false) {
        // giriş kodları
    } else {
        if (anyIssueInMail.value === false) {
            passwordHiddenTips.value = true
            mailHiddenTips.value = false
            shakeAsync.value = `shake`
            clearShake()
        } else if (anyIssueInPassword.value === false) {
            mailHiddenTips.value = true
            passwordHiddenTips.value = false
            shakeAsync.value = `shake`
            clearShake()
        } else {
            mailHiddenTips.value = true
            passwordHiddenTips.value = true   
            shakeAsync.value = `shake`
            clearShake()
        }
    }
}

watch(()=>mailData.value, (newValue, oldValue) => {
    const email = newValue.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        anyIssueInMail.value = false
        mailHiddenTips.value = false
    } else {
        anyIssueInMail.value = true
  }
})

watch(()=>passwordData.value, (newValue, oldValue) => {
    if (newValue.length >= 8) {
        anyIssueInPassword.value = false
        passwordHiddenTips.value = false  
    } else {
        anyIssueInPassword.value = true
  }
})
</script>

<style lang="scss" scoped>
@import '/public/scss/SignInStyle.scss';
</style>