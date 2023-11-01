<template>
    <div id="monoxia-login">
        <!--
            Eğer veri 'signin' ise giriş yapma bölümü gözükür.
            Giriş yap bölümünde 'Don't have an account?' yazısına tıklandığında veri'nin değeri signup olur.
        -->
        <SignIn v-if="veri=='signin'" @info="veri = $event"/>
        <!--
            Eğer veri 'signin' değilse kayıt ol bölümü gözükür.
            Kayıt olma bölümüne 'Already have an account?' yazılı bir props gönderilir.
            Kayıt olma bölümünde 'Already have an account?' yazısına tıklandığında veri'nin değeri signin olur.
         -->
        <SignUp v-else @info="veri = $event" active="Already have an account?"/>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// @ts-ignore
import SignIn from './SignIn.vue';
// @ts-ignore
import SignUp from './SignUp.vue';

const veri = ref('signin');
</script>