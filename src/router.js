import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.vue'
import rank from './views/Rank.vue'
import search from './views/Search.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'test',
        component: home
    }, {
        path: '/rank',
        name: 'rank',
        component: rank
    }, {
        path: '/search',
        component: search
    }, {
        path: '/vue',
        name: 'home',
        component: home
    }]
})
