<template>
    <div class="content">
        <h2 class="remd">推荐歌单</h2>
        <list></list>
        <h2 class="remd">最新音乐</h2>
        <song v-for="item in songs" :key="item.rank" :music="item"></song>
        <foot></foot>
    </div>
</template>

<script>
    import list from '@/components/list.vue'
    import song from '@/components/song.vue'
    import foot from '@/components/foot.vue'
    import { mapState } from 'vuex'
    export default {
        name: 'home',
        components: {
            list,
            song,
            foot
        },
        data () {
            return{

            }
        },
        computed: mapState({
            songs: state => state.last
        })
    }
</script>

<style>
    .content {
        width: 100%;
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
