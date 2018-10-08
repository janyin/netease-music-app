<template>
    <div>
        <div class="search">
            <img class="find" src="../assets/find.svg" alt="find">
            <x-input placeholder="搜索歌曲、歌手、专辑" v-model="sword" @on-enter="search" @on-click-clear-icon="clear" @on-change="change">
            </x-input>
        </div>
        <words v-if="isWord" @hot-search="search"></words>
        <div v-else>
            <section v-if="error">
                <h1>暂无搜索结果</h1>
            </section>
            <section v-else>
                <div v-if="loading">Loading.....</div>
                <song v-else v-for="item in data" :key="item.id" :music="item"></song>
            </section>
        </div>
    </div>
</template>

<script>
    import {XInput} from 'vux'
    import words from '@/components/find/words.vue'
    import song from '@/components/song/song.vue'
    import {getSong} from '@/api/common'

    export default {
        name: 'search',
        data() {
            return {
                sword: '',
                isWord: true,
                loading: true,
                data: [],
                error: false
            }
        },
        components: {
            XInput,
            words,
            song
        },
        methods: {
            search: function (value) {
                this.sword=value;
                this.isWord = false;
                const word = value.trim();
                getSong(word).then(res => {
                    let result = [];
                    let song = res.data.result.songs;
                    song.forEach(function (ele) {
                        let artistsName = '';
                        if(ele.artists.length>=2) {
                            artistsName = ele.artists[0].name + '/' + ele.artists[1].name;
                        }else {
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
                    if(result.length) {
                        this.data = result;
                        this.loading = false;
                    }else {
                        this.error = true;
                    }
                })
            },
            clear: function () {
                this.isWord = true;
            },
            change: function (value) {
                if(value===''){
                    this.isWord = true;
                }
            }
        }
    }
</script>

<style scoped>
    .vux-x-input {
        background: #EBECEC;
        border-radius: 30px;
        padding: 0 30px;
        height: 30px;
        width: 100%;
    }

    .weui-cell:before {
        border: none;
    }

    .search {
        position: relative;
        background: #FBFCFD;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        padding: 0 10px;
    }

    .find {
        position: absolute;
        left: 11px;
        top: 24px;
        margin: 0 8px;
        vertical-align: middle;
        display: inline-block;
        width: 13px;
        height: 13px;
        z-index: 99;
    }
</style>
