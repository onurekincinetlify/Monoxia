<template>
    <div id="monoxia-login">
        <SignIn v-if="veri=='signin'" @info="veri = $event"/>
        <SignUp @info="veri = $event" v-else active="Already have an account?"/>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// @ts-ignore
import SignIn from './SignIn.vue'
// @ts-ignore
import SignUp from './SignUp.vue'
const veri = ref('signin');
</script>

<style lang="scss" scoped>
</style>