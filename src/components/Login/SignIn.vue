<template>
    <div>
        <div class="entrie-container">
            <div class="header">
                <h1>Merhaba!</h1>
            </div>
            <div class="description">
                <p>Hesabınızla Sisteme Giriş Yapınız</p>
            </div>
        </div>
        <div class="input-container">
            <input v-model="username" class="input is-normal" type="text" placeholder="Kullanıcı Adı">
            <input v-model="password" class="input is-normal lastInput" type="text" placeholder="Şifre">
            <a @click="emitEvent" class="GoUp">Henüz kayıt olmadınız mı?</a>
            <br/>
        </div>
        <div class="buttons">
            <button  @click="done" class="signInButton">Giriş Yap</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@font-face {
    font-family: modernify;
    src: url(../../public/fonts/Noyh-Regular.ttf);
}
.entrie-container{
    width: 100%;
}
$color: white;
.lastInput{
    margin: 0px 0px 20px 0px;
}
.GoUp{
    width: 100%;
    margin: 0px 0px 0px 15px;
    color: whitesmoke;
    font-family: modernify;
}
.radio{
    color:white;
    margin: 10px 0px 0px -210px;
}
.buttons{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    .signUpButton{
        margin-right: 30px;
    }
} 
            input[type="text"]{
                border-radius: 50px;
                box-shadow: 2px 2px 10px 2px rgba(126, 126, 126, 0.998);
                box-sizing: border-box;
                font-size: 15px;
            }
            input:first-of-type{
                margin: 20px 0px 30px 0px;
                box-sizing: border-box;
                font-size: 15px;
            }
            button{
                width: 150px;
                height: 40px;
                border-radius: 30px;
                font-size: 16px;
                background: linear-gradient(#7216CE,#202124);
                outline: none;
                border: none;
                text-align: center;
                color: $color;
                font-family: modernify;
            }
            .header{
                color:$color;
                text-align: center;
                font-size: 40px;
                margin: 58px 0px 0px 0px;
            }
            .description{
                color:$color;
                text-align: center;
                font-size: 22px;
                overflow: hidden;
            }
            .input-container{
                display: flex;
                flex-direction: column;
                align-items: center;
            }

</style>

<script lang="ts" setup>
import { defineEmits, ref} from 'vue';
import axios from 'axios';
import SignUp from './SignUp.vue';
import router from '/src/router/router';
const emit = defineEmits({
    changePage:(value:string)=>value
})

const username = ref('');
const password = ref('');

const emitEvent = () => {
    emit('changePage', SignUp)
}

const done = () => {
    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvWeJBNQUkQkaWcgCbXD6g3vcsJVAX8W0", {
            email: username.value,
            password: password.value,
            returnSecureToken: true
        }).then((e:any) => {
            console.log(e)
            if (e.status === 200) {
                localStorage.setItem('userCookie', e.data.localId);
                localStorage.setItem('registered', e.data.registered);
                localStorage.setItem('email', e.data.email);
                router.push('/dashboard');
            } else if (e.status === 400) {
                router.push('/Login');
            } else {
                router.push('/Login');
            };
        });
}
</script>