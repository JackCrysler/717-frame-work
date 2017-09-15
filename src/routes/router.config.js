import Vue from 'vue'
import VueRouter from 'vue-router'
import entry from '../views/index/entry.vue'
import home from '../views/home/home.vue'
import catagory from '../views/list/list.vue'
import cart from '../views/cart/cart.vue'
import mine from '../views/mine/mine.vue'
import search from '../views/search/search.vue'


Vue.use(VueRouter);

let routes = [
    {
        path:'*',
        redirect:'/entry/home'
    },
    {
        name:'entry',
        path:'/entry',
        component:entry,
        children:[
            {
                name:'home',
                path:'home',
                component:home
            },
            {
                name:'catagory',
                path:'catagory',
                component:catagory
            },
            {
                name:'cart',
                path:'cart',
                component:cart
            },
            {
                name:'mine',
                path:'mine',
                component:mine
            }
        ]
    },
    {
        name:'search',
        path:'/search',
        component:search
    }
]

const router = new VueRouter({
    routes
})

export default router