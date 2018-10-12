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
    import { mapActions } from 'vuex'
    export default {
        name: 'words',
        data () {
            return {
                list: []
            }
        },
        methods: {
            ...mapActions([
                'hotWord'
            ])
        },
        created () {
            this.hotWord().then(() => {
                this.list = this.$store.getters.hotWord;
            })
        }
    }
</script>

<style>
    @import "words.css";
</style>
