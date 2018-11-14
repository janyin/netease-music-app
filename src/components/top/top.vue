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
                <tab-item selected @on-item-click="setTab('Home')">推荐音乐</tab-item>
                <tab-item @on-item-click="setTab('Rank')">热歌榜</tab-item>
                <tab-item @on-item-click="setTab('Search')">搜索</tab-item>
            </tab>
        </div>
    </div>
</template>

<script>
    import {Tab, TabItem} from 'vux'

    export default {
        name: 'top',
        components: {
            Tab,
            TabItem
        },
        methods: {
            setTab(val) {
                this.$parent.tabName = val
            }
        }
    }
</script>

<style scoped>
    @import "../../style/top.css";
</style>
