import * as types from './mutation-types'

const mutations = {
    [types.SET_RANK] (state, rank) { //排行榜
        state.rank = rank
    },
    [types.SET_NEWSONG] (state, newSong) { //最新音乐
        state.newSong = newSong
    },
    [types.SET_SONGLIST] (state, remdList) { //推荐歌单
        state.remdList = remdList
    },
    [types.SET_HOTWORD] (state, hotWord) { //搜索热词
        state.hotWord = hotWord
    },
    [types.SET_SEARCH] (state, serachResult) { //搜索结果
        state.searchResult = serachResult
    },
    [types.SET_PLAYURL] (state, url) { //设置播放歌曲url
        state.currentPlayUrl = url
    },
    setMusic (state, obj) { //设置播放歌曲信息
        state.music = obj
    }
};

export default mutations
