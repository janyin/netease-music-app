import * as types from './mutation-types'

const mutations = {
    [types.SET_RANK](state, rank) { //排行榜
        state.rank = rank
    },
    [types.SET_NEWSONG](state, newSong) { //最新音乐
        state.newSong = newSong
    },
    [types.SET_REMDSONGLIST](state, remdList) { //推荐歌单
        state.remdList = remdList
    },
    [types.SET_HOTWORD](state, hotWord) { //搜索热词
        state.hotWord = hotWord
    },
    [types.SET_SEARCH](state, serachResult) { //搜索结果
        state.searchResult = serachResult
    },
    [types.SET_PLAYURL](state, url) { //设置播放歌曲url
        state.currentPlayUrl = url
    },
    [types.SET_LISTDETAIL](state, obj) { //设置歌单详情
        state.listDetail = obj;
    },
    [types.SET_CURRENTMUSIC](state, obj) { //设置当前播放音乐信息
        state.currentMusic = obj;
    },
    setLoad(state, val) { //设置loading组件是否显示
        state.isLoad = val
    },
    setToast(state, val) { //设置toast组件是否显示
        state.isToast = val
    },
    setPlayer(state, val) { //设置播放器是否显示
        state.isPlayer = val
    },
};

export default mutations
