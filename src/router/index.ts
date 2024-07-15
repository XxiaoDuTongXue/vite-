import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/login',
        name: 'login',
        //@ts-ignore
        component: () => import('../view/login/index.vue')
    },
    {
        path: '/',
        name:'production',
        //@ts-ignore
        component:() => import('../view/production/index.vue')
    },
    {
        path:'/acl',
        name:'acl',
        component:()=>import('../view/acl/index.vue')
    },
    {
        path:'/404',
        name:'404',
        //@ts-ignore
        component:()=>import('../view/404/index.vue')
    }
    ]
})

export default router