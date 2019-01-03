<template>
  <div class="hot-list">
    <h3>热门搜索</h3>
    <ul class="list">
      <li
        class="hot-word"
        v-for="item in hotWord"
        :key="item.first"
        @click="$emit('hot-search',item.first)"
      >
        <a href="javascript:void(0);">{{ item.first }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["hotWord"])
  }
}
</script>

<style>
@import "../style/words.css";
</style>
