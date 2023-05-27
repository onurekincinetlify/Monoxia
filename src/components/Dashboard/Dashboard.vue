<template>
    <div id="dashboard-root">
        <h1>Welcome {{ emailName }}</h1>
    </div>    
</template>

<script lang="ts" setup>
import { ref } from "vue";

const localEmail = ref(localStorage.getItem('email'));
const entrie:any = ref(localEmail.value?.split("@"));
const emailName = ref(entrie.value[0]);

</script>