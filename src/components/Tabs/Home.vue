<template>
  <div class="content">
    <h2 class="remd">推荐歌单</h2>
    <SongList></SongList>
    <h2 class="remd">最新音乐</h2>
    <div>
      <section v-if="error">
        <h1>加载失败</h1>
      </section>
      <section v-else>
        <div v-if="loading">loading</div>
        <Song v-else v-for="item in data" :key="item.id" :music="item"></Song>
      </section>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import SongList from "@/components/SongList.vue";
import Song from "@/components/Song.vue";
import Foot from "@/components/Footer/Foot.vue";
import { mapActions } from "vuex";
export default {
  components: {
    SongList,
    Song,
    Foot
  },
  data() {
    return {
      loading: true,
      data: [],
      error: false
    }
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
