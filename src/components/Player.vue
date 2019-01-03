<template>
  <div>
    <audio :src="currentPlayUrl" controls autoplay>你的浏览器暂时不支持H5播放</audio>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    error: true
  }),
  computed: {
    ...mapState(["currentPlayUrl"])
  }
}
</script>
