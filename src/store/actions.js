import {
    getNewSong,
    getRank,
    getRemd,
    getWord,
    getSearchSong,
    getMusicUrl,
    getPlaylist
} from '@/api/common'
import * as types from './mutation-types'

const actions = {
    Rank({
        commit
    }) { //获取歌曲排行榜数据
        return new Promise((resolve, reject) => {
            getRank().then(res => {
                let result = [];
                let song = res.data.playlist.tracks.slice(0, 20);
                song.forEach(function (ele, index) {
                    let artistsName = '';
                    if (ele.ar.length >= 2) {
                        artistsName = ele.ar[0].name + '/' + ele.ar[1].name;
                    } else {
                        artistsName = ele.ar[0].name;
                    }
                    let obj = {
                        id: ele.id,
                        title: ele.name,
                        alias: ele.alia[0],
                        artists: artistsName,
                        album: ele.al.name,
                        rank: index + 1
                    };
                    if (index <= 2) {
                        obj.color = true;
                    }
                    if (index <= 8) {
                        obj.rank = '0' + obj.rank;
                    }
                    result.push(obj);
                });
                if (result.length) {
                    commit(types.SET_RANK, result);
                    resolve()
                } else {
                    reject()
                }
            })
        })
    },
    newSong({
        commit
    }) { //获取最新歌曲数据
        return new Promise((resolve, reject) => {
            getNewSong().then(res => {
                let result = [];
                let song = res.data.result;
                song.forEach(function (ele) {
                    let artistsName = '';
                    if (ele.song.artists.length >= 2) {
                        artistsName = ele.song.artists[0].name + '/' +
                            ele.song.artists[1].name;
                    } else {
                        artistsName = ele.song.artists[0].name;
                    }
                    let obj = {
                        id: ele.id,
                        title: ele.name,
                        artists: artistsName,
                        album: ele.song.album.name
                    };
                    result.push(obj);
                });
                if (result.length) {
                    commit(types.SET_NEWSONG, result);
                    resolve()
                } else {
                    reject()
                }
            })
        })
    },
    songList({
        commit
    }) { //获取推荐歌单数据
        return new Promise((resolve, reject) => {
            getRemd().then(res => {
                let result = [];
                let song = res.data.result.slice(0, 6);
                song.forEach(function (ele) {
                    let obj = {
                        id: ele.id,
                        name: ele.name,
                        imgUrl: ele.picUrl
                    };
                    let temp = parseInt(ele.playCount) + '';
                    if (temp.length >= 6) {
                        obj.play = temp[0] + temp[1] + '万';
                    } else {
                        obj.play = temp;
                    }
                    result.push(obj);
                });
                if (result.length) {
                    commit(types.SET_SONGLIST, result);
                    resolve()
                } else {
                    reject()
                }
            })
        })
    },
    hotWord({
        commit
    }) { //获取热门搜索词数据
        return new Promise((resolve, reject) => {
            getWord().then(res => {
                let word = res.data.result.hots;
                if (word.length) {
                    commit(types.SET_HOTWORD, word);
                    resolve()
                } else {
                    reject()
                }
            })
        })
    },
    getSearch({
        commit
    }, value) { //获取搜索结果数据
        return new Promise((resolve, reject) => {
            const word = value.trim();
            getSearchSong(word).then(res => {
                let result = [];
                let song = res.data.result.songs;
                song.forEach(function (ele) {
                    let artistsName = '';
                    if (ele.artists.length >= 2) {
                        artistsName = ele.artists[0].name + '/' + ele.artists[1].name;
                    } else {
                        artistsName = ele.artists[0].name;
                    }
                    let obj = {
                        id: ele.id,
                        title: ele.name,
                        alias: ele.alias[0],
                        artists: artistsName,
                        album: ele.album.name
                    };
                    result.push(obj);
                });
                if (result.length) {
                    commit(types.SET_SEARCH, result);
                    resolve()
                } else {
                    reject()
                }
            })
        })
    },
    getMusicUrl({
        commit
    }, id) { //获取音乐播放地址
        return new Promise((resolve, reject) => {
            getMusicUrl(id).then(res => {
                let url = res.data.data[0].url;
                if (url) {
                    commit(types.SET_PLAYURL, url);
                    resolve()
                } else {
                    reject()
                }
            })
        })
    },
    PlaylistDetail({
        commit
    }, id) { //获取歌单详细信息
        return new Promise((resolve, reject) => {
            getPlaylist(id).then(res => {
                let song = res.data.playlist.tracks.slice(0, 25);
                let result = song.map((ele, index) => {
                    let artistsName = '';
                    if (ele.ar.length >= 2) {
                        artistsName = ele.ar[0].name + '/' + ele.ar[1].name;
                    } else {
                        artistsName = ele.ar[0].name;
                    }
                    return {
                        id: ele.id,
                        title: ele.name,
                        alias: ele.alia[0],
                        artists: artistsName,
                        album: ele.al.name,
                        rank: index + 1
                    }
                });
                let obj = {
                    tags: res.data.playlist.tags,
                    des: res.data.playlist.description,
                    music: result,
                    name: res.data.playlist.name,
                    imgUrl: res.data.playlist.coverImgUrl
                };
                if (result.length) {
                    commit(types.SET_LISTDETAIL, obj);
                    resolve()
                } else {
                    reject()
                }
            })
        })
    }
};

export default actions