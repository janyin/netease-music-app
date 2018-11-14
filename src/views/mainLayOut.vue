<template>
    <div>
        <top></top>
        <keep-alive>
            <component :is="tabName"></component>
        </keep-alive>
    </div>
</template>

<script>
    import top from '../components/Top/top.vue'
    import Home from '../components/Tabs/Home.vue'
    import Rank from '../components/Tabs/Rank.vue'
    import Search from '../components/Tabs/Search.vue'

    export default {
        name: 'mainLayOut',
        data: () => ({
            tabName: 'Home'
        }),
        components: {
            top,
            Home,
            Rank,
            Search
        }
    }
</script>
