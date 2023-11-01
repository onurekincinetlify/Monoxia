<template>
    <div>
        <div class="entrie-container">
            <div class="header">
                <h1>Merhaba!</h1>
            </div>
            <div class="description">
                <p>Bilgilerinizle Sisteme Kayıt Olunuz</p>
            </div>
        </div>
        <div class="input-container">
            <input class="input is-normal" type="text" placeholder="Ad Soyad">
            <input v-model="mailData" class="input is-normal" type="text" placeholder="Email Adresi">
            <input v-model="passwordData" class="input is-normal" type="text" placeholder="Şifre Belirleyiniz">
            <a @click="emitEvent" class="GoUp">Zaten hesabınız var mı?</a>
            <br/>
        </div>
        <div class="buttons">
            <button @click="done" class="signUpButton">Kayıt Ol</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$color: white;
.entrie-container{
    width: 100%;
}
.radio{
    color:white;
    margin: 10px 0px 0px -210px;
}
.GoUp{
    width: 100%;
    margin: 0px 0px 0px 15px;
    color: whitesmoke;
    font-family: modernify;
}
.buttons{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
}   
.done{
        margin-top: 10px!important;
    }
            input[type="text"]{
                border-radius: 50px;
                box-shadow: 2px 2px 10px 2px rgba(126, 126, 126, 0.998);
                box-sizing: border-box;
                font-size: 15px;
            }
            input:first-of-type{
                margin: 20px 0px 10px 0px;
                box-sizing: border-box;
                font-size: 15px;
            }
            input{
                margin: 20px 0px 10px 0px;
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
                margin: 0px 0px 0px 0px;
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
import SignIn from './SignIn.vue'
import router from '/src/router/router';
const emit = defineEmits({
    changePage:(value:string)=>value
})

const mailData = ref('')
const passwordData = ref('')


const done = () => {
axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvWeJBNQUkQkaWcgCbXD6g3vcsJVAX8W0", {
            email: mailData.value,
            password: passwordData.value,
            returnSecureToken: true
        }).then((e:any) => {
            console.log(e)
            if (e.status === 200) {
                emitEvent()
            } else if (e.status === 400) {
                router.push('/olmadı');
            } else {
                router.push('/olmadı');
            };
        });
}

const emitEvent = () => {
    emit('changePage', SignIn)
}
</script>