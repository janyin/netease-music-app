import axios from 'axios'
import {
    HOST
} from './config'

export function getWord() {
    const url = HOST + `/search/hot`;
    return axios.get(url)
}

export function getSearchSong(word) {
    const url = HOST + `/search?keywords=${word}`;
    return axios.get(url)
}

export function getRank() {
    const url = HOST + `/top/list?idx=1`;
    return axios.get(url)
}

export function getRemd() {
    const url = HOST + '/personalized';
    return axios.get(url)
}

export function getNewSong() {
    const url = HOST + '/personalized/newsong';
    return axios.get(url)
}

export function getMusicUrl(id) {
    const url = HOST + `/song/url?id=${id}`;
    return axios.get(url)
}

export function getPlaylist(id) {
    const url = HOST + `/playlist/detail?id=${id}`;
    return axios.get(url)
}
