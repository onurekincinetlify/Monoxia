<template>
    <div id="dashboard-root">
        <div class="left-navbar">
            <div class="profile">
                <img width="70" height="70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png?20160314153816" />
                <h1 v-if="newUsername">{{ newUsername }}</h1>
                <h1 v-else>{{ localEmail }}</h1>
            </div>
            <div class="fields">
                <div class="field">
                    <a @click="currentComponent=Profile"><i class='bx bx-user'></i>Profile</a>
                </div>
                <div class="field">
                    <a @click="currentComponent=Charts"><i class='bx bx-line-chart' ></i>Charts</a>
                </div>
                <div class="field">
                    <a @click="currentComponent=Analytics"><i class='bx bxs-analyse' ></i>Analytics</a>
                </div>
                <div class="field">
                    <a @click="currentComponent=Formulas"><i class='bx bx-pyramid'></i>Formulas</a>
                </div>
                <div class="field">
                    <a @click="currentComponent=Subjects"><i class='bx bx-book' ></i>Subjects</a>
                </div>
                <div class="field">
                    <a @click="currentComponent=Configure"><i class='bx bx-server'></i>Configuartion</a>
                </div>
                <div class="field">
                    <a @click="currentComponent=Settings"><i class='bx bx-cog'></i>Settings</a>
                </div>
            </div>
            <div class="exit">
                <button @click="exit" class="button" style="color:red;">Log Out</button>
            </div>
        </div>
        <div class="monitor">
            <component :is="currentComponent" />
        </div>
    </div>    
</template>

<script lang="ts" setup>
//foksiyonel component değişimi {}
import { computed, markRaw, onMounted, ref, shallowRef } from "vue";
import { useCookieStore } from "/src/stores/cookieStore";
import Settings from './Navbar/Settings.vue';
import Charts from './Navbar/Charts.vue';
import Analytics from './Navbar/Analytics.vue';
import Formulas from './Navbar/Formulas.vue';
import Subjects from './Navbar/Subjects.vue';
import Configure from './Navbar/Configure.vue';
// @ts-ignore has no defaul export
import Profile from './Navbar/Profile.vue';
import eventBus from "/src/stores/eventBus";

const currentComponent = shallowRef(Settings);
const localEmail = ref(localStorage.getItem('email'));
const entrie: any = ref(localEmail.value?.split("@"));
const emailName = ref(entrie.value[0]);
const newUsername:any = ref(useCookieStore().username);
const exit = () => {
    localStorage.removeItem('registered')
    localStorage.removeItem('email')
    localStorage.removeItem('userCookie')
    localStorage.removeItem('username')
    useCookieStore().exit()
    window.location.href = window.location.protocol + '//' + window.location.host;
}

onMounted(() => {
    eventBus.on('ProfileUsername', (payload) => {
        newUsername.value = payload
    })
})
</script>

<style lang="scss" scoped>
@import '/public/scss/DashboardStyle.scss';
</style>