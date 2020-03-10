//搜索选项卡
<template>
  <div>
    <div class="search">
      <img class="find" src="@/assets/find.svg" alt="find">
      <x-input
        placeholder="搜索歌曲、歌手、专辑"
        v-model="searchText"
        @on-enter="search"
        @on-click-clear-icon="clear"
        @on-change="change"
      ></x-input>
    </div>
    <Trending v-if="isWord" @hot-search="search"></Trending>
    <div v-else>
      <section v-if="error">
        <h1>暂无搜索结果</h1>
      </section>
      <section v-else>
        <div v-if="loading">Loading.....</div>
        <div v-else>
          <Song v-for="item in searchResult" :key="item.id" :music="item"></Song>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { XInput } from "vux";
import Trending from "@/components/searchTab/trending.vue";
import Song from "@/components/song.vue";

export default {
  data() {
    return {
      searchText: "",
      isWord: false,
      loading: true,
      error: false
    };
  },
  components: {
    XInput,
    Trending,
    Song,
  },
  computed: {
    ...mapGetters(["searchResult"])
  },
  methods: {
    ...mapActions(["getSearchResult", "getTrendingWord"]),
    search: function(value) {
      this.isWord = false;
      this.getSearchResult(value)
        .then(() => {
          this.searchText = value;
          this.loading = false;
        })
        .catch(() => {
          this.searchText = value;
          this.error = true;
        });
    },
    clear: function() {
      this.isWord = true;
    },
    change: function(value) {
      if (value === "") {
        this.isWord = true;
      }
    }
  },
  created() {
    this.getTrendingWord().then(() => {
      this.isWord = true;
    });
  }
};
</script>

<style scoped>
.vux-x-input {
  background: #ebecec;
  border-radius: 30px;
  padding: 0 30px;
  height: 30px;
  width: 100%;
}

.weui-cell:before {
  border: none;
}

.search {
  position: relative;
  background: #fbfcfd;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 10px;
}

.find {
  position: absolute;
  left: 11px;
  top: 24px;
  margin: 0 8px;
  vertical-align: middle;
  display: inline-block;
  width: 13px;
  height: 13px;
  z-index: 99;
}
</style>
