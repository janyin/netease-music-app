<template>
  <a href="javascript: void(0)" class="song" @click="playMusic(music.id)">
    <div class="song-num" v-if="music.rank" :class="{highlight: music.color}">{{ music.rank }}</div>
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
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      error: false
    }
  },
  props: {
    music: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["getMusicUrl"]),
    ...mapMutations(["setLoad", "setMusicLoad"]),
    playMusic(id) {
      this.setLoad(true);
      let that = this;
      this.getMusicUrl(id)
        .then(() => {
          that.setMusicLoad(true);
        })
        .catch(() => {
          that.setMusicLoad(false);
          alert("获取歌曲失败！");
        })
        .finally(() => {
          this.setLoad(false);
        });
    }
  }
}
</script>

<style scoped>
@import "../../styles/song_item.css";
</style>
