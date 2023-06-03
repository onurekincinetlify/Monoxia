import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard/Dashboard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name: 'Home', component: ():any => import("../components/Home.vue")
        },

        // Navbar
        { path: '/About', name: 'About', component: () => import("../components/Navbar/About.vue") },
        { path: '/Contact', name: 'Contact', component: () => import("../components/Navbar/Contact.vue") },
        { path: '/Docs', name: 'Docs', component: () => import("../components/Navbar/Docs.vue") },
        { path: '/Report', name: 'ReportIssue', component: () => import("../components/Navbar/ReportIssue.vue") },
        { path: '/Login', name: 'Login', component: () => import('../components/Login/Login.vue') },
        { path: '/Dashboard', name: 'Dashboard', component: import('../components/Dashboard/Dashboard.vue') }
    ]
});

/*
    Login sayfasına girmeden önce kayıtlı olup olmadığını kontrol eder.
    Eğer kayıtlıysa Dasboard'a yönlendirir, değilse Login sayfasına girmesine izin verir.
*/
router.beforeEach((to, from, next) => {
    if (to.name == 'Login' && localStorage.getItem('registered')) {
        next({ name: 'Dashboard' });
    } else {
        next(true);
    }
});

/*
    Dashboard sayfasına girmeden önce kayıtlı olup olmadığını kontrol eder.
    Eğer kayıtlı değilse Login sayfasına yönlendirir, kayıtlıysa Dasboard'a girmesine izin verir.
*/
router.beforeEach((to, from, next) => {
    if (to.name == 'Dashboard' && localStorage.getItem('registered') === null) {
        next({ name: 'Login' });
    } else {
        
        next(true);
    }
});

export default router;