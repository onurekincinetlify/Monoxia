<template>
  <div>
    <router-view :key="route.fullPath"></router-view>
    <!-- <Footer/> -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Navbar from '/src/components/Navbar.vue';
import Footer from '/src/components/Footer.vue';
const route = useRoute();
</script>

<style lang="scss">
// @import '/public/scss/AppStyle.scss';
</style>