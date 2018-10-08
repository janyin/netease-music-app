<template>
    <div class="top">
    <div class="home-top">
        <div class="top-fix">
                <img src="./logo.svg" alt="logo" class="topsvg">
                <div class="topfr">
                    <span>
                        下载APP
                    </span>
                </div>
        </div>
        <tab bar-active-color="#d43c33" active-color="#d43c33">
            <tab-item selected><router-link to="/vue" >推荐音乐</router-link></tab-item>
            <tab-item><router-link to="/rank" >热歌榜</router-link></tab-item>
            <tab-item><router-link to="/search" >搜索</router-link></tab-item>
        </tab>
    </div>
    </div>
</template>

<script>
    import { Tab, TabItem } from 'vux'
    export default {
        name: 'top',
        components: {
            Tab,
            TabItem
        }
    }
</script>

<style scoped>
    @import "top.css";
</style>
