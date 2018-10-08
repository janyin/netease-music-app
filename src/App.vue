<template>
  <div id="app">
    <top></top>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
    import top from './components/top/top.vue'
    export default {
        name: 'App',
        components: {
            top
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
</style>
