<template>
  <div id="app">
    <top></top>
    <keep-alive>
      <component :is="getTab"></component>
    </keep-alive>
    <div class="player">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import top from './components/Top/top.vue'
    import Home from './components/Tabs/Home.vue'
    import Rank from './components/Tabs/Rank.vue'
    import Search from './components/Tabs/Search.vue'
    export default {
        name: 'App',
        data: () => ({
            tabName: 'Home'
        }),
        computed: {
            getTab () {
                return this.tabName
            }
        },
        components: {
            top,
            Home,
            Rank,
            Search
        }
    }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
    color: black;
  }
  #app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: 14px/1.5 Helvetica,sans-serif;
  color: #333;
  }
  .player{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
  }
</style>
