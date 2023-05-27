<template>
    <div id="dashboard-root">
        <h1>Welcome {{ emailName }}</h1>
        <button @click="exit" class="button" style="color:red;">exit</button>
    </div>    
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "/src/router/router";
import { useCookieStore } from "/src/stores/cookieStore";

const localEmail = ref(localStorage.getItem('email'));
const entrie:any = ref(localEmail.value?.split("@"));
const emailName = ref(entrie.value[0]);

const exit = () => {
    localStorage.removeItem('registered')
    localStorage.removeItem('email')
    localStorage.removeItem('userCookie')
    useCookieStore().exit()
    window.location.href = window.location.protocol + '//' + window.location.host;
}
</script>