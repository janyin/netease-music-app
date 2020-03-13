import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const home = r => require.ensure([], () => r(require('./page/home')), 'home');
const playList = r => require.ensure([], () => r(require('./page/playList')), 'playList');
const player = r => require.ensure([], () => r(require('./page/player')), 'player');

export default new Router({
    routes: [{
        path: '/',
        component: home //主界面
    }, {
        path: '/playlist/detail',
        component: playList //歌单页面
    }, {
        path: '/player',
        component: player //播放页面
    }]
})