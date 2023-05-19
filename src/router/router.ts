import { createRouter, createWebHistory } from 'vue-router';

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
    ]
});

export default router;