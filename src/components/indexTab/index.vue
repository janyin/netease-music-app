// 首页选项卡
<template>
  <div class="content">
    <h2 class="remd">推荐歌单</h2>
    <RecommendList></RecommendList>
    <h2 class="remd">最新音乐</h2>
    <div>
      <section v-if="error">
        <h1>加载失败</h1>
      </section>
      <section v-else>
        <div v-if="loading">loading</div>
        <div v-else>
          <Song v-for="item in data" :key="item.id" :music="item"></Song>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import RecommendList from "@/components/indexTab/recommendList.vue";
import Song from "@/components/song.vue";
import Footer from "@/components/indexTab/footer.vue";

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
    Song,
    Footer
  },
  methods: {
    ...mapActions(["getNewSongList"])
  },
  created() {
    this.getNewSongList()
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
