<template>
  <div v-if="userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i)">
    <div class="mobile-alert">
      <Navbar/>
      <h1>Our website currently does not have mobile support, so to avoid many errors and incompatibilities, our website is currently closed for mobile devices. Please try accessing it from a computer.</h1>
      <Footer/>
    </div>
  </div>
  <div v-else>
    <Navbar/>
    <router-view key="route.fullPath"></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink} from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
// @ts-ignore
import Navbar from '/src/components/Navbar.vue';
import Footer from '/src/components/Footer.vue';

const route = useRoute();
const router = useRouter();

var userAgent = navigator.userAgent;
</script>

<style lang="scss">
.mobile-alert h1{
  font-size: 20px;
  text-align: center;
  margin-top: 150px;
}
</style>