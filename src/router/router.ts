import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name: 'Home', component: ():any => import("../components/Home.vue"),
        },
        {
            path: '/login', name: 'Login', component: ():any => import("../components/Login.vue")
        },
        {
            path: '/dashboard', name: 'Dashboard', component: ():any => import("../components/Dashboard/Dashboard.vue")
        },
        {
            path: '/:catchAll(.*)', // Tüm yolları yakala
            component: ():any => import("../components/Error.vue"),
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.name == 'Login' && localStorage.getItem('registered')) {
        next({ name: 'Dashboard' });
    } else {
        next(true);
    }
});

router.beforeEach((to, from, next) => {
    if (to.name == 'Dashboard' && localStorage.getItem('registered') === null) {
        next({ name: 'Login' });
    } else {
        next(true);
    }
});

export default router;