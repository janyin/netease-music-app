<template>
  <div class="playlistwrap">
    <section class="list-head">
      <div class="list-head-bg" :style="bgStyle"></div>
      <div class="getBack" @click="goBack">
        <h3>返回</h3>
      </div>
      <div class="list-head-content">
        <div class="lhc-img">
          <img :src="listDetail.imgUrl" alt="pic">
          <span class="s-icon">歌单</span>
        </div>
        <div class="lhc-info">
          <h2 class="lhc-title">{{ listDetail.name }}</h2>
        </div>
      </div>
    </section>
    <section class="list-info">
      <div class="info-tags">标签:
        <em class="tag" v-for="tag in listDetail.tags" :key="tag">{{ tag }}</em>
      </div>
      <div class="info-intro" v-if="listDetail.des">
        <span>简介：{{ listDetail.des }}</span>
      </div>
    </section>
    <div class="list-song">
      <h3>歌曲列表</h3>
      <song-item v-for="item in listDetail.music" :key="item.id" :music="item"></song-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SongItem from "@/components/SongItem/index.vue";

export default {
  components: {
    SongItem
  },
  computed: {
    ...mapGetters(["listDetail"]),
    bgStyle() {
      return {
        backgroundImage: "url(" + this.listDetail.imgUrl + ")"
      }
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
@import "../styles/playlist_page.css";
</style>
