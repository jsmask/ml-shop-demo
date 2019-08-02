import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'
import Sort from 'views/Sort.vue'
import Cart from 'views/Cart.vue'
import Profile from 'views/Profile.vue'
import NotFound from 'views/NotFound.vue'
import GoodsInfo from 'views/GoodsInfo.vue'
import Test from 'views/Test'

Vue.use(Router)

const route = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        redirect: "/home"
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/sort',
        name: 'sort',
        component: Sort
    }, {
        path: '/cart',
        name: 'cart',
        component: Cart
    }, {
        path: '/profile',
        name: 'profile',
        component: Profile
    }, {
        path: "/goodsinfo",
        name: "goodsinfo",
        component: GoodsInfo,
    }, {
        path: '/test',
        component: Test
    }, {
        path: "*",
        name: "404",
        component: NotFound
    }]
})

export default route;