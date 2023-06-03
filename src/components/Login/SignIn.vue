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
                <a @click="emitEvent">Don't have an account?</a>
            </div>
        </div>
        <div class="buttonWrapper">
            <input @click.prevent="loginFn" :class="`${shakeAsync}`" class="btn" type="submit" value="Login" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref,defineEmits } from "vue";
import axios from "axios";
import router from "/src/router/router";
import { useCookieStore } from '/src/stores/cookieStore';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import eventBus from "/src/stores/eventBus";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { isEmailCorrect, changeStatus, variables } from '../../watchHelpers';

const auth = getAuth();
const { mailData, passwordData, anyIssueInMail, anyIssueInPassword, mailHiddenTips, passwordHiddenTips } = variables;
const shakeAsync = ref(``);

async function clearShake() {
    await new Promise(resolve => setTimeout(resolve, 900));
    shakeAsync.value = ``;
};

const emit: (event: "info", value: string) => void = defineEmits({
    info: (value: string) => value
});

const emitEvent = () => {
    emit('info', 'signup');
};

const signInUser = async (email:any, password:any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Oturum açma işlemi başarılı.
  } catch (error:any) {
    // Oturum açma işlemi başarısız.
  }
};

// Giriş yapar ve gerekli LocalStorage item'lerini kaydeder.
const loginFn = async () => {
    if (anyIssueInMail.value === false && anyIssueInPassword.value === false) {
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCrvH7f7hwIL6dGHKqXSY5JU2bzHPSm9BU", {
            email: mailData.value,
            password: passwordData.value,
            returnSecureToken: true
        }).then((e) => {
            if (e.status === 200) {
                localStorage.setItem('userCookie', e.data.localId);
                localStorage.setItem('registered', e.data.registered);
                localStorage.setItem('email', e.data.email);
                useCookieStore().setRegistered();
                signInUser(mailData.value, passwordData.value);
                const filteredQuery = query(
                    collection(db, "addedExtra"),
                    where("localId", "==", e.data.localId)
                );
                const getData = async () => {
                    const querySnapshot = await getDocs(filteredQuery);
                    querySnapshot.forEach((doc) => {
                        const username = doc.data().username;
                        localStorage.setItem('username', username);
                        eventBus.emit('ProfileUsername', username);
                    });
                };
                getData();
                router.push('/Dashboard');
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
            clearShake();
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