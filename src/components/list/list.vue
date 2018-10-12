<template>
    <div class="song-list">
    <div class="list">
        <a href="javascript:void(0)" class="remd_li" v-for="item in data" :key="item.playCount">
            <div class="list-img">
                <img :src="item.imgUrl" alt="1">
                <span>{{ item.play }}</span>
            </div>
            <p class="remd-text">{{ item.name }}</p>
        </a>
    </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'list',
        data () {
            return {
                data: [],
                error: false
            }
        },
        methods: {
            ...mapActions([
                'songList'
            ])
        },
        created () {
            this.songList().then(() => {
                this.data = this.$store.getters.remdList;
            }).catch(() => {
                this.error = true;
            })
        }
    }
</script>

<style>
    @import "list.css";
</style>
