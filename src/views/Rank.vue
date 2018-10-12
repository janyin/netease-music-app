<template>
    <div>
        <div class="hot-top">
            <div class="hot-flex">
                <div class="hot-icon"></div>
                <div class="hot-time">
                    更新日期：10月11日
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
    import { mapActions } from 'vuex'
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
        methods: {
            ...mapActions([
                'Rank'
            ])
        },
        created () {
            this.Rank().then(() => {
                this.loading = false;
                this.data = this.$store.getters.rank;
            }).catch(() => {
                this.error = true;
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
