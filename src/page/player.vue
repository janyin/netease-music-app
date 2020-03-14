<template>
  <transition 
  enter-to-class="animated slideInUp"
  leave-active-class="animated slideOutDown">
    <div>
      <div class="song_bg" :style="bgStyle"></div>
      <div class="wrapper">
        <div class="player_getBack" @click="goBack">
          <h3>返回</h3>
        </div>
        <div class="icon_rotate" @click="changePlayerStatus">
          <div class="needle"></div>
          <div class="icon_center">
            <div class="song_img">
              <div class="default_img rotateDiv" :class="{noRotate: !playerStatus}">
                <img v-lazy="currentMusic.imgUrl" alt="歌曲图片" />
              </div>
            </div>
          </div>
          <span class="play_btn" v-if="!playerStatus"></span>
        </div>
        <div class="song_info">
          <p class="song_title">{{ currentMusic.song }} —— {{ currentMusic.singer }}</p>
          <div class="lrc_wrapper" ref="lrc">
            <div class="lrc_content">
              <p
                class="lrc_item"
                :class="{active_lrc: activeIndex === index}"
                v-for="(item, index) in currentMusic.lyric"
                :key="index"
                ref="lrc_item"
              >{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="link_comment" v-if="false">查看评论</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { XButton } from "vux";
import BScroll from "better-scroll";
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      scroll: ""
    };
  },
  computed: {
    ...mapGetters(["currentMusic", "currentTime", "playerStatus"]),
    activeIndex() {
      return this.currentMusic.lyric.findIndex((item, index, array) => {
        let nextLyric = array[index + 1];

        if (
          item.time <= this.currentTime &&
          (nextLyric ? this.currentTime < nextLyric.time : true)
        ) {
          return index;
        }
      });
    },
    bgStyle() {
      return {
        backgroundImage: `url(${this.currentMusic.imgUrl})`
      };
    }
  },
  components: {
    XButton
  },
  methods: {
    ...mapMutations(["changePlayerStatus", "setPlayer"]),
    goBack() {
      this.setPlayer(true);
      this.$router.back();
    }
  },
  watch: {
    activeIndex(newIndex) {
      let lrc_item = this.$refs.lrc_item;
      this.scroll.scrollToElement(lrc_item[newIndex], 200, 0, true);
    }
  },
  activated() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.lrc);
    } else {
      this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
@import url("~@/styles/player.css");
</style>