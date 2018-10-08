<template>
    <div>
        <div class="hot-top">
            <div class="hot-flex">
                <div class="hot-icon"></div>
                <div class="hot-time">
                    更新日期：10月04日
                </div>
            </div>
        </div>
        <div>
            <section v-if="error">
                <h1>加载失败！</h1>
            </section>
            <section v-else>
                <div v-if="loading">loading...</div>
                <song v-else v-for="item in data" :key="item.rank" :music="item"></song>
            </section>
        </div>
    </div>
</template>

<script>
    import song from '@/components/song/song.vue'
    import {getRank} from '@/api/common'
    export default {
        name: 'rank',
        components: {
            song
        },
        data () {
            return{
                loading: true,
                data: [],
                error: false,
                time: ''
            }
        },
        mounted() {
            getRank().then(res => {
                let result = [];
                let song = res.data.playlist.tracks.slice(0,20);
                song.forEach(function (ele,index) {
                    let artistsName = '';
                    if(ele.ar.length>=2) {
                        artistsName = ele.ar[0].name + '/' + ele.ar[1].name;
                    }else {
                        artistsName = ele.ar[0].name;
                    }
                    let obj = {
                        id: ele.dt,
                        title: ele.name,
                        alias: ele.alia[0],
                        artists: artistsName,
                        album: ele.al.name,
                        rank: index+1
                    };
                    if(index<=2){
                        obj.color=true;
                    }
                    if(index<=8){
                        obj.rank='0'+obj.rank;
                    }
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
    .hot-time{
        text-align: left;
        margin-top: 10px;
        color: hsla(0,0%,100%,0.8);
        font-size: 12px;
        transform: scale(0.91);
        transform-origin: left top;
    }
    .hot-icon{
        width: 142px;
        height: 67px;
        background-image: url("../assets/hot_icon.png");
        background-position: -24px -30px;
        background-size: 166px 97px;
    }
    .hot-flex{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 2;
        padding-left: 20px;
        box-sizing: border-box;
    }
    .hot-top{
        position: relative;
        padding-top: 38.9%;
        overflow: hidden;
        background: url("../assets/hot_bg.jpg") no-repeat;
        background-size: contain;
    }
    .hot-top:after{
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background-color: rgba(0,0,0,.2);
    }
</style>
