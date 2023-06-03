<template>
  <div v-if="userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i)">
    <div class="mobile-alert">
      <Navbar/>
      <h1>Our website currently does not have mobile support, so to avoid many errors and incompatibilities, our website is currently closed for mobile devices. Please try accessing it from a computer.</h1>
      <Footer/>
    </div>
  </div>
  <div>
    <Navbar/>
    <router-view :key="route.fullPath"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
// @ts-ignore
import Navbar from '/src/components/Navbar.vue';
import Footer from '/src/components/Footer.vue';

const route = useRoute();

var userAgent = navigator.userAgent;
</script>

<style lang="scss">
@import '/public/scss/AppStyle.scss';
</style>