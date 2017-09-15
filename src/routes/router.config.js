import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home.vue'
import catagory from '../views/list/list.vue'
import cart from '../views/cart/cart.vue'
import mine from '../views/mine/mine.vue'
console.log(home)
Vue.use(VueRouter);

let routes = [
    {
        path:'*',
        redirect:'/home'
    },
    {
        name:'home',
        path:'/home',
        component:home
    },
    {
        name:'catagory',
        path:'/catagory',
        component:catagory
    },
    {
        name:'cart',
        path:'/cart',
        component:cart
    },
    {
        name:'mine',
        path:'/mine',
        component:mine
    }
]

const router = new VueRouter({
    routes
})

export default router