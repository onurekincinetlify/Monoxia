<template>
  <div>
    <Navbar/>
    <router-view key="route.fullPath"></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink} from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import Navbar from '/src/components/Navbar.vue';
import Footer from '/src/components/Footer.vue';
import card from '/src/components/Cards.vue';

const route = useRoute();
const router = useRouter();
</script>

<style lang="scss">
</style>