<template>
    <div>
        <div class="search">
            <img class="find" src="../assets/find.svg" alt="find">
            <x-input placeholder="搜索歌曲、歌手、专辑" v-model="word">
            </x-input>
        </div>
        <div class="hot-list">
            <h3>热门搜索</h3>
            <ul class="list">
                <li class="hot-word">
                    <a href="javascript:void(0);">可不可以</a>
                </li>
                <li class="hot-word">
                    <a href="javascript:void(0);">不染</a>
                </li>
                <li class="hot-word">
                    <a href="javascript:void(0);">张杰</a>
                </li>
                <li class="hot-word">
                    <a href="javascript:void(0);">往后余生</a>
                </li>
                <li class="hot-word">
                    <a href="javascript:void(0);">凉生</a>
                </li>
                <li class="hot-word">
                    <a href="javascript:void(0);">飘向北方</a>
                </li>
                <li class="hot-word">
                    <a href="javascript:void(0);">陷阱</a>
                </li>
                <li class="hot-word">
                    <a href="javascript:void(0);">去年夏天</a>
                </li>
                <li class="hot-word">
                    <a href="javascript:void(0);">花粥</a>
                </li>
                <li class="hot-word">
                    <a href="javascript:void(0);">一百万个可能</a>
                </li>
                <li class="hot-word">
                    <a href="javascript:void(0);">云烟成雨</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { Group, XInput } from 'vux'
    export default {
        name: 'search',
        data () {
            return{
                word: ''
            }
        },
        components: {
            Group,
            XInput
        }
    }
</script>

<style scoped>
    .hot-word{
        position: relative;
        display: inline-block;
        height: 32px;
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 0 14px;
        font-size: 14px;
        line-height: 32px;
        color: #333;
        border: 1px solid rgba(0,0,0,.1);;
        border-radius: 37.5%/100%;
        cursor: pointer;
    }
    .hot-list{
        padding: 15px 10px 0;
        text-align: left;
    }
    .hot-list h3{
        font-size: 12px;
        line-height: 12px;
        color: #666;
    }
    .list{
        margin: 10px 0 7px;
    }
    .vux-x-input{
        background: #EBECEC;
        border-radius: 30px;
        padding: 0 30px;
        height: 30px;
        width: 100%;
    }
    .weui-cell:before{
        border: none;
    }
    .search{
        position: relative;
        background: #FBFCFD;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(0,0,0,.1);
        padding: 0 10px;
    }
    .find{
        position: absolute;
        left: 11px;
        top:24px;
        margin: 0 8px;
        vertical-align: middle;
        display: inline-block;
        width: 13px;
        height: 13px;
        z-index: 99;
    }
</style>
