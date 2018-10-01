<template>
    <div class="top">
    <div class="home-top">
        <div class="top-fix">
                <img src="../assets/logo.svg" alt="logo" class="topsvg">
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
    .top{
        height: 108px;
    }
    .vux-tab .vux-tab-item{
        font-size: 15px;
    }
    .home-top{
        position: fixed;
        top:0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 108px;
    }
    .top-fix{
        display: flex;
        padding: 0 20px;
        width: 100%;
        height: 64px;
        background-color: #d43c33;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
    }
    .topsvg{
        width: 142px;
        height: 25px;
        overflow: hidden;
    }
    a{
        display: block;
        width: inherit;
        height: inherit;
    }
    .topfr span{
        position: relative;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        color: #fff;
        font-size: 15px;
        border: 1px solid white;
        border-radius: 37.5%/100%;
        cursor: pointer;
    }
</style>
