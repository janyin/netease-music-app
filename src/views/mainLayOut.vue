<template>
  <div>
    <Top></Top>
    <keep-alive>
      <component :is="tabName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Top from "../components/Top/Top.vue";
import Home from "../components/Tabs/Home.vue";
import Rank from "../components/Tabs/Rank.vue";
import Search from "../components/Tabs/Search.vue";

export default {
  data: () => ({
    tabName: "Home"
  }),
  components: {
    Top,
    Home,
    Rank,
    Search
  }
}
</script>
