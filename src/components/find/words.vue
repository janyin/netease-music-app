<template>
    <div class="hot-list">
        <h3>热门搜索</h3>
        <ul class="list">
            <li class="hot-word" v-for="item in list" :key="item.first"
                @click="$emit('hot-search',item.first)">
                <a href="javascript:void(0);">{{ item.first }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getWord} from '@/api/common'
    export default {
        name: 'words',
        data () {
            return {
                list: []
            }
        },
        mounted() {
            getWord().then(res => {
                this.list = res.data.result.hots;
            })
        }
    }
</script>

<style>
    @import "words.css";
</style>
