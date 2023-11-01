<template>
    <div id="LoginContainer">
        <div id="LoginBox">
            <div class="LeftBox">
                <component @changePage='componentId=$event' :is="componentId"></component>
            </div>
            <div class="RightBox">
                <div class="header">
                    <h1>Hoşgeldiniz!</h1>
                </div>
                <div class="description">
                    <h1>{{veri}}</h1>
                    <p>Web sitemiz, yıkıcı bir deprem anında sizin gibi değerli kullanıcıların güvende olduğunu bildirmesi için tasarlanmıştır. Eğer maalesef bir deprem sırasında hala yardıma ihtiyacınız varsa ve güvende olduğunuzu bildirmezseniz, 10 saatlik bir geri sayım başlatılır. Bu sürenin sonunda, konum bilgileriniz Twitter ve diğer platformlar aracılığıyla paylaşılır. Amacımız, yardım ekiplerinin yıkılmış binaların altında hala hayatta olan insanları tespit edebilmesine yardımcı olmaktır. Güvende olduğunuzu bildirmeyi unutmayın ve yardım bekleyenlere ulaşmamıza yardımcı olun.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SignIn from './Login/SignIn.vue';
import SignUp from './Login/SignUp.vue';
const componentId = ref(SignIn);
const veri = ref('');
</script>

<style lang="scss">
$color: white;

@font-face {
    font-family: modernify;
    src: url(../../public/fonts/Noyh-Regular.ttf);
}

#LoginContainer{
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color:white;
    background-image: url(https://images.unsplash.com/reserve/NV0eHnNkQDHA21GC3BAJ_Paris%20Louvr.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80);
    background-size: cover;
    font-family: modernify;
    #LoginBox{
        display: flex;
        width: 900px;
        height: 500px;
        border: none;
        border-radius: 20px;
        background-color: rgba(4, 0, 0, 0.45);
        box-shadow: 0px 0px 40px 30px rgba(230, 226, 226, 0.355);
        .LeftBox{
            flex: 1.5;
            padding: 30px;
        }
        .RightBox{
            flex: 1;
            background: linear-gradient(#7217d4,#1D0462);   
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            padding: 30px;
            .header{
                font-size: 26px;
                color:$color;
                text-align: center;
                margin: 25% 0px 10px 0px;
            }
            .description{
                font-size: 14px;
                color: $color;
                text-align: center;
                overflow: hidden;
            }
        }
    }
}
</style>