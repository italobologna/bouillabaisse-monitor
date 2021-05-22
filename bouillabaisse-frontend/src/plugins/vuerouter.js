import VueRouter from 'vue-router'
import Dashboard from './../components/Dashboard'
import Notifications from './../components/Notifications'

const routes = [
    {
        path: '',
        redirect: {
            path: '/dashboard'
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/notifications',
        name: 'notifications',
        component: Notifications,
    }
]

export default new VueRouter({
    mode: 'history',
    routes,
    base: process.env.BASE_URL,
})