import {
    getNewSong,
    getRank,
    getRemd,
    getWord,
    getSearchSong,
    getMusicUrl,
    getPlaylist,
    getMusicDetail,
    checkMusic,
} from '@/api/getData'
import * as types from './mutation-types'

const actions = {
    async getRankList({ //获取歌曲排行榜
        commit
    }) {
        let response = await getRank();
        let song = response.data.playlist.tracks.slice(0, 20);

        let rankListData = song.map(function (currentValue, index) {
            let artistsName = '';
            if (currentValue.ar.length >= 2) { //最多两个歌手名称
                artistsName = currentValue.ar[0].name + '/' + currentValue.ar[1].name;
            } else {
                artistsName = currentValue.ar[0].name;
            }
            let obj = {
                id: currentValue.id,
                title: currentValue.name,
                alias: currentValue.alia[0],
                artists: artistsName,
                album: currentValue.al.name,
                rank: index + 1
            };
            if (index <= 2) { //前三歌曲加粗
                obj.color = true;
            }
            if (index <= 8) { //前9歌曲序号加0
                obj.rank = '0' + obj.rank;
            }
            return obj;
        });

        commit(types.SET_RANK, rankListData);
    },
    async getNewSongList({ //获取最新歌曲列表
        commit
    }) {
        let response = await getNewSong();
        let song = response.data.result;

        let newSongListData = song.map(function (currentValue) {
            let artistsName = '';

            if (currentValue.song.artists.length >= 2) {
                artistsName = currentValue.song.artists[0].name + '/' +
                    currentValue.song.artists[1].name;
            } else {
                artistsName = currentValue.song.artists[0].name;
            }

            let obj = {
                id: currentValue.id,
                title: currentValue.name,
                artists: artistsName,
                album: currentValue.song.album.name
            };
            return obj;
        });

        commit(types.SET_NEWSONG, newSongListData);
    },
    async getRemdSongList({ //获取推荐歌单
        commit
    }) {
        let response = await getRemd();
        let song = response.data.result.slice(0, 6);

        let remdSongListData = song.map(function (currentValue) {
            let obj = {
                id: currentValue.id,
                name: currentValue.name,
                imgUrl: currentValue.picUrl
            };
            let temp = parseInt(currentValue.playCount) + '';
            if (temp.length >= 6) {
                obj.play = temp[0] + temp[1] + '万';
            } else {
                obj.play = temp;
            }
            return obj;
        });

        commit(types.SET_REMDSONGLIST, remdSongListData);
    },
    async getTrendingWord({ //获取热门搜索词数据
        commit
    }) {
        let response = await getWord();
        let word = response.data.result.hots;

        commit(types.SET_HOTWORD, word);
    },
    async getSearchResult({ //获取搜索结果数据
        commit
    }, value) {
        const word = value.trim();
        let response = await getSearchSong(word);
        let song = response.data.result.songs;

        let searchResultList = song.map(function (currentValue) {
            let artistsName = '';
            if (currentValue.artists.length >= 2) {
                artistsName = currentValue.artists[0].name + '/' + currentValue.artists[1].name;
            } else {
                artistsName = currentValue.artists[0].name;
            }
            let obj = {
                id: currentValue.id,
                title: currentValue.name,
                alias: currentValue.alias[0],
                artists: artistsName,
                album: currentValue.album.name
            };
            return obj;
        });

        commit(types.SET_SEARCH, searchResultList);
    },
    async getMusicData({ //获取当前音乐信息
        commit
    }, music) {
        let check = await checkMusic(music.id);
        if (check.data.success) {
            let response = await getMusicUrl(music.id);
            let response2 = await getMusicDetail(music.id);

            let song = {
                url: response.data.data[0].url,
                imgUrl: response2.data.songs[0].al.picUrl,
                singer: music.artists,
                song: music.title,
            };
            if (!song.url) {
                return Promise.reject('false');
            }

            commit(types.SET_CURRENTMUSIC, song);
        } else {
            return Promise.reject('false');
        }
    },
    async getListDetail({ //获取歌单详细信息
        commit
    }, id) {
        let response = await getPlaylist(id);
        let song = response.data.playlist.tracks.slice(0, 25);

        let playListSong = song.map(function (currentValue, index) {
            let artistsName = '';
            if (currentValue.ar.length >= 2) {
                artistsName = currentValue.ar[0].name + '/' + currentValue.ar[1].name;
            } else {
                artistsName = currentValue.ar[0].name;
            }
            return {
                id: currentValue.id,
                title: currentValue.name,
                alias: currentValue.alia[0],
                artists: artistsName,
                album: currentValue.al.name,
                rank: index + 1
            }
        });
        let playlistDetail = {
            tags: response.data.playlist.tags,
            des: response.data.playlist.description,
            music: playListSong,
            name: response.data.playlist.name,
            imgUrl: response.data.playlist.coverImgUrl
        };

        commit(types.SET_LISTDETAIL, playlistDetail);
    },
};

export default actions