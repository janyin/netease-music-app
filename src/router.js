import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const getComponent = (name) => () => import(`./views/${name}.vue`); //路由懒加载

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: '首页推荐',
        alias: '/vue',
        component: getComponent('Home')
    }, {
        path: '/rank',
        name: '排行榜',
        component: getComponent('Rank')
    }, {
        path: '/search',
        name: '搜索',
        component: getComponent('Search')
    }]
})
