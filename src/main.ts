import { createApp, Directive } from 'vue';
import App from './App.vue';
import router from './router/router';
import 'bulma';
import { createPinia } from 'pinia'
import * as echarts from 'echarts';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const LogDirective: Directive = {
    created(el:HTMLElement, binding, vnode) {
        el.addEventListener('click', () => {
            console.log('bana tıklandı')
            console.log(binding.value())
            // v-log.onur="() => {return 'hi'}"
        })
        // v-log.onur="'ek'"
        console.log(binding.modifiers) // onur
        console.log(binding.value) // ek
        console.log(binding.arg)
     },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        // doc
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        // comp her defasında güncellendiğinde
        console.log('updated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    }
}

const pinia = createPinia();

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.directive('log', LogDirective)
// app.use(AOS);
// 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
// v-log
app.use(router);
app.use(pinia);
app.mount('#app');
