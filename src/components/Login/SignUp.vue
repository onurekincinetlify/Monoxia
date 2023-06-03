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
                <a @click="emitEvent">{{ active }}</a>
            </div>
        </div>
        <div class="buttonWrapper">
            <input @click.prevent="loginFn" :class="`${shakeAsync}`" class="btn" type="submit" value="Login" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, ExtractPropTypes } from "vue";
import axios from "axios";
import router from "/src/router/router";
import { isEmailCorrect, changeStatus, variables } from '../../watchHelpers';

const { mailData, passwordData, anyIssueInMail, anyIssueInPassword, mailHiddenTips, passwordHiddenTips } = variables;
const shakeAsync = ref(``);

async function clearShake() {
    await new Promise(resolve => setTimeout(resolve, 900));
    shakeAsync.value = ``;
};

const emit: (event: "info", value: string) => void = defineEmits({
    info: (value: string) => value
});

const emitEvent = ():any => {
    emit('info', 'signin');
};

const props: Readonly<ExtractPropTypes<{active: StringConstructor;}>> = defineProps({
    active: String,
});

// Kayıt olur ve anasayfa'ya yönlendirir.
const loginFn = async () => {
    if (anyIssueInMail.value === false && anyIssueInPassword.value === false) {
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCrvH7f7hwIL6dGHKqXSY5JU2bzHPSm9BU", {
            email: mailData.value,
            password: passwordData.value,
            returnSecureToken: true
        }).then((e) => {
            if (e.status === 200) {
                router.push('/');
            } else if (e.status === 400) {
                router.push('/Login');
            } else {
                router.push('/Login');
            };
        });
    } else {
        if (anyIssueInMail.value === false) {
            passwordHiddenTips.value = true;
            mailHiddenTips.value = false;
            shakeAsync.value = `shake`;
            clearShake()
        } else if (anyIssueInPassword.value === false) {
            mailHiddenTips.value = true;
            passwordHiddenTips.value = false;
            shakeAsync.value = `shake`;
            clearShake();
        } else {
            mailHiddenTips.value = true;
            passwordHiddenTips.value = true;
            shakeAsync.value = `shake`;
            clearShake();
        }
    };
};

isEmailCorrect();
changeStatus();
</script>

<style lang="scss" scoped>
@import '/public/scss/Login/SignInStyle.scss';
</style>