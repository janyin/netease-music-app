<template>
    <div class="song-list">
    <div class="list">
        <a href="javascript:void(0)" class="remd_li" v-for="item in data" :key="item.playCount">
            <div class="list-img">
                <img :src="item.imgUrl" alt="1">
                <span>{{ item.play }}</span>
            </div>
            <p class="remd-text">{{ item.name }}</p>
        </a>
    </div>
    </div>
</template>

<script>
    import {getRemd} from '@/api/common'
    export default {
        name: 'list',
        data () {
            return {
                data: [],
                error: false
            }
        },
        mounted() {
            getRemd().then(res => {
                let result = [];
                let song = res.data.result.slice(0,6);
                song.forEach(function (ele){
                    let obj = {
                        name: ele.name,
                        imgUrl: ele.picUrl
                    };
                    let temp=parseInt(ele.playCount)+'';
                    if(temp.length>=6){
                        obj.play=temp[0]+temp[1]+'万';
                    }else {
                        obj.play=temp;
                    }
                    result.push(obj);
                });
                if(result.length) {
                    this.data = result;
                }else {
                    this.error = true;
                }
            })
        }
    }
</script>

<style>
    @import "list.css";
</style>
