<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Loading :show="load" :text="loadText"></Loading>
    <music-player v-if="musicLoad" class="player"></music-player>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Loading } from "vux";
import MusicPlayer from "./components/MusicPlayer/index.vue";

export default {
  data() {
    return {
      loadText: "加载中..."
    };
  },
  computed: {
    ...mapGetters(["load", "musicLoad"])
  },
  components: {
    MusicPlayer,
    Loading
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: 14px/1.5 Helvetica, sans-serif;
  color: #333;
}
.player {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
}
</style>
