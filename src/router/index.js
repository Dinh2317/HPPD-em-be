import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/trangchu',
        component: ()=>import('../components/ADMIN/trangchu/index.vue')
    }, {
        path : '/',
        component: ()=>import('../components/dautien/index.vue')
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router