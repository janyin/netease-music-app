<template>
    <div class="content">
        <h2 class="remd">推荐歌单</h2>
        <list></list>
        <h2 class="remd">最新音乐</h2>
        <div>
            <section v-if="error">
                <h1>加载失败</h1>
            </section>
            <section v-else>
                <div v-if="loading">loading</div>
                <song v-else v-for="item in data" :key="item.id" :music="item"></song>
            </section>
        </div>
        <foot></foot>
    </div>
</template>

<script>
    import list from '@/components/list/list.vue'
    import song from '@/components/song/song.vue'
    import foot from '@/components/foot/foot.vue'
    import {getNewSong} from '@/api/common'
    export default {
        name: 'home',
        components: {
            list,
            song,
            foot
        },
        data () {
            return{
                loading: true,
                data: [],
                error: false
            }
        },
        mounted() {
            getNewSong().then(res => {
                    let result = [];
                    let song = res.data.result;
                    song.forEach(function (ele) {
                        let artistsName = '';
                        if(ele.song.artists.length>=2) {
                            artistsName = ele.song.artists[0].name + '/' +
                                ele.song.artists[1].name;
                        }else {
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
                    if(result.length) {
                        this.data = result;
                        this.loading = false;
                    }else {
                        this.error = true;
                    }
                })
        }
    }
</script>

<style>
    .content {
        height: 100%;
        padding-top: 20px;
    }
    .remd {
        display: block;
        position: relative;
        padding-left: 9px;
        margin-bottom: 14px;
        font-size: 17px;
        font-weight: 400;
        height: 20px;
        line-height: 20px;
    }
    .remd:after{
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -9px;
        width: 2px;
        height: 16px;
        background-color: #d33a31;
    }
</style>
