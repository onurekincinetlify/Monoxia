<style lang="scss" scoped>
.left-navbar{
    position: absolute;
    border: 3px solid rgb(228, 224, 224);
    box-shadow: 3px 3px 3px 3px rgb(242, 238, 238);
    width: 230px;
    box-sizing: border-box;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-top: 35px;
}
.profile{
    border-bottom: 2px solid rgb(201, 201, 201);
    box-shadow: 0px 10px 20px 0px rgb(242, 238, 238);
    margin-bottom: 5%;
    padding: 10px;
    text-align: center;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
.fields .field{
    border-bottom: 2px solid rgba(136, 138, 142, 0.315);
    padding: 15px 0px 10px 0px;
    width: 200px;
    text-align: left;
    margin: 0 auto;
    box-sizing: border-box;
}
.fields .field a{
    font-size: 16px;
    color:rgb(22, 23, 25);
    overflow: hidden;
    transition: 0.3s margin ease;
    letter-spacing: 0.2px;
}
.fields .field a i{
    margin-right: 3px;
}
.fields .field a:hover{
    margin-left: 3%;
}
.exit{
    border-top: 2px solid rgb(201, 201, 201);
    box-shadow: 0px -10px 20px 0px rgb(242, 238, 238);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin-top: 5%;
    text-align: center;
    overflow: hidden;
}
.exit button{
    width: 100%;
}
</style>

<template>
    <div id="dashboard-root">
        <div class="left-navbar">
            <div class="profile">
                <img width="70" height="70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png?20160314153816" />
                <h1>{{ localEmail }}</h1>
            </div>
            <div class="fields">
                <div class="field">
                    <a><i class='bx bx-user'></i>Profile</a>
                </div>
                <div class="field">
                    <a><i class='bx bx-line-chart' ></i>Charts</a>
                </div>
                <div class="field">
                    <a><i class='bx bxs-analyse' ></i>Analytics</a>
                </div>
                <div class="field">
                    <a><i class='bx bx-pyramid'></i>Formulas</a>
                </div>
                <div class="field">
                    <a><i class='bx bx-book' ></i>Subjects</a>
                </div>
                <div class="field">
                    <a><i class='bx bx-server'></i>Configuartion</a>
                </div>
                <div class="field">
                    <a><i class='bx bx-cog'></i>Settings</a>
                </div>
            </div>
            <div class="exit">
                <button @click="exit" class="button" style="color:red;">Log Out</button>
            </div>
        </div>
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