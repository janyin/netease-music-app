<template>
  <div class="song-list">
    <div v-if="loading">loading</div>
    <section v-else>
      <div class="list">
        <a
          href="javascript:void(0)"
          class="remd_li"
          v-for="item in remdList.one"
          :key="item.id"
          @click="listDetail(item)"
        >
          <div class="list-img">
            <img :src="item.imgUrl" alt="pic">
            <span>{{ item.play }}</span>
          </div>
          <p class="remd-text">{{ item.name }}</p>
        </a>
      </div>
      <div class="list">
        <a
          href="javascript:void(0)"
          class="remd_li"
          v-for="item in remdList.two"
          :key="item.id"
          @click="listDetail(item)"
        >
          <div class="list-img">
            <img :src="item.imgUrl" alt="1">
            <span>{{ item.play }}</span>
          </div>
          <p class="remd-text">{{ item.name }}</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions(["songList", "PlaylistDetail"]),
    ...mapMutations(["setLoad"]),
    listDetail: function(item) {
      this.setLoad(true);
      this.PlaylistDetail(item.id)
        .then(() => {
          this.$router.push({
            path: "/playlist/detail",
            query: { id: item.id }
          });
        })
        .catch(() => {
          alert("请求服务器错误");
        })
        .finally(() => {
          this.setLoad(false);
        });
    }
  },
  computed: {
    ...mapGetters(["remdList"])
  },
  created() {
    this.songList()
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = true;
      });
  }
}
</script>

<style>
@import "../../styles/remd_list.css";
</style>
