import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const getComponent = (name) => () => import(`./views/${name}.vue`); //路由懒加载

export default new Router({
    mode: 'history',
    routes: [{
        path: '/play',
        name: '播放',
        component: getComponent('Player')
    }]
})
