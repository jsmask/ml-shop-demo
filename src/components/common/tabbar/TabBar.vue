<template>
    <div>
        <nav class="msk-tabbar">
            <tab-bar-item v-for="(item,index) in navList" :key="index" 
            :name="item.name" :path="item.path" :icon="item.icon" 
            :select-color="selectColor" :default-color="defaultColor" />
        </nav>
    </div>
</template>

<script>
    import TabBarItem from './TabBarItem.vue';
    export default {
        name:"TabBar",
        components:{
            TabBarItem
        },
        props:{
            navList:Array,
            selectColor:{
                type:String,
                default:"#7094FF"
            },
            defaultColor:{
                type:String,
                default:"#999999"
            }
        }
    }
</script>

<style scoped>
    .msk-tabbar{
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        right: 0;
        background: #fefefe;
        height: 49px;
        box-shadow: 1px -1px 3px #f5f5f5;
        z-index: 1000;
        display: flex;
        align-items: center;
    }

</style>