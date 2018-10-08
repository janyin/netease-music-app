<template>
    <a href="javascript: void(0)" class="song">
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
    export default {
        name: 'song',
        data () {
            return{

            }
        },
        props:{
            music: Object
        }
    }
</script>

<style scoped>
   @import "song.css";
</style>
