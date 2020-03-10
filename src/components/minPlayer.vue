// 底部迷你播放器
<template>
  <div class="btm_player">
    <span class="play_btn" :class="{stop_btn: isStop}" @click="changeMusic"></span>
    <div class="musicInfo">
      <img :src="currentMusic.imgUrl" alt="歌曲图片" />
      <p>
        <span>{{ currentMusic.song }}</span> -
        <span>{{ currentMusic.singer }}</span>
      </p>
      <div class="process">
        <x-progress :percent="percent" :show-cancel="false"></x-progress>
      </div>
    </div>
    <audio :src="currentMusic.url" autoplay ref="player" @timeupdate="getPercent">你的浏览器暂时不支持H5播放</audio>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { XProgress } from "vux";

export default {
  data: () => ({
    percent: 0,
    isStop: false,
  }),
  computed: {
    ...mapState(["currentMusic"])
  },
  methods: {
    getPercent() {
      let currentTime = this.$refs.player.currentTime;
      let duration = this.$refs.player.duration;
      this.percent = Number(((currentTime / duration) * 100).toFixed(2));
    },
    changeMusic(){
      let audio = this.$refs.player;
      if(audio.paused){
        audio.play();
        this.isStop = false;
      }else{
        audio.pause();
        this.isStop = true;
      }
    }
  },
  components: {
    XProgress
  }
};
</script>

<style scoped>
.btm_player {
  height: 53px;
  width: 100vw;
  background: url("~@/assets/playbar.png") repeat-x;
}
.musicInfo {
  position: relative;
  max-width: 80%;
  margin-left: 18%;
}
.musicInfo img {
  position: absolute;
  width: 13vw;
  height: 13vw;
  top: -3vw;
  left: 0;
}
.musicInfo p {
  position: absolute;
  left: 15vw;
  top: 2vw;
  color: #e8e8e8;
  font-size: 0.8rem;
  height: 5vw;
  overflow: hidden;
}
.process {
  position: absolute;
  top: 8vw;
  left: 15vw;
  width: 60vw;
}
.play_btn{
  position: absolute;
  left: 4%;
  top: 2vw;
  width: 36px;
  height: 36px;
  background: url("~@/assets/playbar.png") no-repeat;
  background-position: 0 -165px;
}
.stop_btn{
  background-position: 0 -204px;
}
</style>
