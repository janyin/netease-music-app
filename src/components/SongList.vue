<template>
    <div class="song-list">
        <div v-if="loading">loading</div>
        <section v-else>
        <div class="list">
            <a href="javascript:void(0)" class="remd_li"
               v-for="item in remdList.one"
               :key="item.playCount">
                <div class="list-img">
                    <img :src="item.imgUrl" alt="1">
                    <span>{{ item.play }}</span>
                </div>
                <p class="remd-text">{{ item.name }}</p>
            </a>
        </div>
        <div class="list">
            <a href="javascript:void(0)" class="remd_li"
               v-for="item in remdList.two"
               :key="item.playCount">
                <div class="list-img">
                    <img :src="item.imgUrl" alt="1">
                    <span>{{ item.play }}</span>
                </div>
                <p class="remd-text">{{ item.name }}</p>
            </a>
        </div>
        </section>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'list',
        data() {
            return {
                loading: true
            }
        },
        methods: {
            ...mapActions([
                'songList'
            ])
        },
        computed: {
            ...mapGetters([
                'remdList'
            ])
        },
        created() {
            this.songList().then(() => {
                this.loading = false
            }).catch(() => {
                this.loading = true
            })
        }
    }
</script>

<style>
    @import "../style/list.css";
</style>
