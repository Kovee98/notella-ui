import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Repos from './views/Repos.vue';
import Tasks from './views/Tasks.vue';
import Login from './views/Login.vue';

export default [
    {
        path: '/',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/login',
        component: Login,
        meta: { title: 'Login', navbar: false }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { title: 'Dashboard' }
    },
    {
        path: '/repos',
        component: Repos,
        meta: { title: 'Repos' }
    },
    {
        path: '/tasks',
        component: Tasks,
        meta: { title: 'Tasks' }
    },
    // {
    //     path: '/:path(.*)',
    //     component: NotFound
    // }
];
