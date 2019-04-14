<template>
  <div class="content">
    <h2 class="remd">推荐歌单</h2>
    <recommend-list></recommend-list>
    <h2 class="remd">最新音乐</h2>
    <div>
      <section v-if="error">
        <h1>加载失败</h1>
      </section>
      <section v-else>
        <div v-if="loading">loading</div>
        <div v-else>
          <song-item v-for="item in data" :key="item.id" :music="item"></song-item>
        </div>
      </section>
    </div>
    <home-bottom></home-bottom>
  </div>
</template>

<script>
import RecommendList from "@/components/RecommendList/index.vue";
import SongItem from "@/components/SongItem/index.vue";
import HomeBottom from "@/components/HomeBottom/index.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loading: true,
      data: [],
      error: false
    }
  },
  components: {
    RecommendList,
    SongItem,
    HomeBottom
  },
  methods: {
    ...mapActions(["newSong"])
  },
  created() {
    this.newSong()
      .then(() => {
        this.loading = false;
        this.data = this.$store.getters.newSong;
      })
      .catch(() => {
        this.error = true;
      });
  }
}
</script>

<style scoped>
.content {
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
.remd:after {
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
