<template>
    <a href="javascript: void(0)" class="song" @click="playMusic(music.id)">
        <div class="song-num" v-if="music.rank" :class="{highlight: music.color}">
            {{ music.rank }}
        </div>
        <div class="song-wrapper">
            <div class="song-info">
                <div class="song-title">
                    {{ music.title }}
                    <span v-if="music.alias">({{ music.alias }})</span>
                </div>
                <div class="song-detail">
                    <i class="sq"></i>
                    {{ music.artists }} - {{ music.album }}
                </div>
            </div>
            <div class="song-play">
                <span class="play-icon"></span>
            </div>
        </div>
    </a>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex'
    export default {
        name: 'song',
        data () {
            return{
                error: false
            }
        },
        props:{
            music: Object
        },
        methods: {
            ...mapActions([
               'getMusicUrl'
            ]),
            ...mapMutations([
               'setMusic'
            ]),
            playMusic (id) {
                this.getMusicUrl(id).then(() => {
                    this.setMusic(this.music)
                }).catch(() => {
                    alert('获取歌曲失败！')
                });
                this.$router.push({
                    path: '/play',
                    query: { id: id}
                })
            }
        }
    }
</script>

<style scoped>
   @import "../style/song.css";
</style>
