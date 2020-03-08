<template>
  <div>
    <home-top></home-top>
    <keep-alive>
      <component :is="tabName"></component>
    </keep-alive>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop/index.vue";
import TabIndex from "@/components/TabIndex/index.vue";
import TabRank from "@/components/TabRank/index.vue";
import TabSearch from "@/components/TabSearch/index.vue";

export default {
  data: () => ({
    tabName: "TabIndex"
  }),
  components: {
    HomeTop,
    TabIndex,
    TabRank,
    TabSearch
  }
}
</script>
