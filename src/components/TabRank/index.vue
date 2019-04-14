<template>
  <div>
    <div class="hot-top">
      <div class="hot-flex">
        <div class="hot-icon"></div>
        <div class="hot-time">更新日期：4月11日</div>
      </div>
    </div>
    <div>
      <section v-if="error">
        <h1>加载失败！</h1>
      </section>
      <section v-else style="padding-bottom: 68px">
        <div v-if="loading">loading...</div>
        <div v-else>
          <song-item v-for="item in rank" :key="item.id" :music="item"></song-item>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem/index.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      loading: true,
      error: false
    }
  },
  components: {
    SongItem
  },
  computed: {
    ...mapGetters(["rank"])
  },
  methods: {
    ...mapActions(["Rank"])
  },
  created() {
    this.Rank()
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.error = true;
      });
  }
}
</script>

<style scoped>
.hot-time {
  text-align: left;
  margin-top: 10px;
  color: hsla(0, 0%, 100%, 0.8);
  font-size: 12px;
  transform: scale(0.91);
  transform-origin: left top;
}
.hot-icon {
  width: 142px;
  height: 67px;
  background-image: url("../../assets/hot_icon.png");
  background-position: -24px -30px;
  background-size: 166px 97px;
}
.hot-flex {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  padding-left: 20px;
  box-sizing: border-box;
}
.hot-top {
  position: relative;
  padding-top: 38.9%;
  overflow: hidden;
  background: url("../../assets/hot_bg.jpg") no-repeat;
  background-size: contain;
}
.hot-top:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
